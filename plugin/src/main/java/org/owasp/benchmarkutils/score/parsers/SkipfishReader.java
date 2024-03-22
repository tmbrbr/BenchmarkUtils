package org.owasp.benchmarkutils.score.parsers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.mozilla.javascript.ast.ArrayLiteral;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.NodeVisitor;
import org.mozilla.javascript.ast.NumberLiteral;
import org.mozilla.javascript.ast.ObjectLiteral;
import org.mozilla.javascript.ast.ObjectProperty;
import org.mozilla.javascript.ast.StringLiteral;
import org.mozilla.javascript.ast.VariableInitializer;
import org.owasp.benchmarkutils.score.BenchmarkScore;
import org.owasp.benchmarkutils.score.CweNumber;
import org.owasp.benchmarkutils.score.ResultFile;
import org.owasp.benchmarkutils.score.TestCaseResult;
import org.owasp.benchmarkutils.score.TestSuiteResults;

public class SkipfishReader extends Reader {

    public static final int INVALID_RULE_ID = -1;

    // From the results:
    // var issue_desc= {

    //     "10101": "SSL certificate issuer information",
    //     "10201": "New HTTP cookie added",
    //     "10202": "New 'Server' header value seen",
    //     "10203": "New 'Via' header value seen",
    //     "10204": "New 'X-*' header value seen",
    //     "10205": "New 404 signature seen",

    //     "10401": "Resource not directly accessible",
    //     "10402": "HTTP authentication required",
    //     "10403": "Server error triggered",
    //     "10404": "Directory listing enabled",
    //     "10405": "Hidden files / directories",

    //     "10501": "All external links",
    //     "10502": "External URL redirector",
    //     "10503": "All e-mail addresses",
    //     "10504": "Links to unknown protocols",
    //     "10505": "Unknown form field (can't autocomplete)",
    //     "10601": "HTML form (not classified otherwise)",
    //     "10602": "Password entry form - consider brute-force",
    //     "10603": "File upload form",
    //     "10701": "User-supplied link rendered on a page",
    //     "10801": "Incorrect or missing MIME type (low risk)",
    //     "10802": "Generic MIME used (low risk)",
    //     "10803": "Incorrect or missing charset (low risk)",
    //     "10804": "Conflicting MIME / charset info (low risk)",
    //     "10901": "Numerical filename - consider enumerating",
    //     "10902": "OGNL-like parameter behavior",
    //     "10909": "Signature match (informational)",

    //     "20101": "Resource fetch failed",
    //     "20102": "Limits exceeded, fetch suppressed",
    //     "20201": "Directory behavior checks failed (no brute force)",
    //     "20202": "Parent behavior checks failed (no brute force)",
    //     "20203": "IPS filtering enabled",
    //     "20204": "IPS filtering disabled again",
    //     "20205": "Response varies randomly, skipping checks",
    //     "20301": "Node should be a directory, detection error?",

    //     "30101": "HTTP credentials seen in URLs",
    //     "30201": "SSL certificate expired or not yet valid",
    //     "30202": "Self-signed SSL certificate",
    //     "30203": "SSL certificate host name mismatch",
    //     "30204": "No SSL certificate data found",
    //     "30205": "Weak SSL cipher negotiated",
    //     "30206": "Host name length mismatch (name string has null byte)",
    //     "30301": "Directory listing restrictions bypassed",
    //     "30401": "Redirection to attacker-supplied URLs",
    //     "30402": "Attacker-supplied URLs in embedded content (lower risk)",
    //     "30501": "External content embedded on a page (lower risk)",
    //     "30502": "Mixed content embedded on a page (lower risk)",
    //     "30503": "HTTPS form submitting to a HTTP URL",
    //     "30601": "HTML form with no apparent XSRF protection",
    //     "30602": "JSON response with no apparent XSSI protection",
    //     "30603": "Auth form leaks credentials via HTTP GET",
    //     "30701": "Incorrect caching directives (lower risk)",
    //     "30801": "User-controlled response prefix (BOM / plugin attacks)",
    //     "30901": "HTTP header injection vector",
    //     "30909": "Signature match detected",

    //     "40101": "XSS vector in document body",
    //     "40102": "XSS vector via arbitrary URLs",
    //     "40103": "HTTP response header splitting",
    //     "40104": "Attacker-supplied URLs in embedded content (higher risk)",
    //     "40105": "XSS vector via injected HTML tag attribute",
    //     "40201": "External content embedded on a page (higher risk)",
    //     "40202": "Mixed content embedded on a page (higher risk)",
    //     "40301": "Incorrect or missing MIME type (higher risk)",
    //     "40302": "Generic MIME type (higher risk)",
    //     "40304": "Incorrect or missing charset (higher risk)",
    //     "40305": "Conflicting MIME / charset info (higher risk)",
    //     "40401": "Interesting file",
    //     "40402": "Interesting server message",
    //     "40501": "Directory traversal / file inclusion possible",
    //     "40601": "Incorrect caching directives (higher risk)",
    //     "40701": "Password form submits from or to non-HTTPS page",
    //     "40909": "Signature match detected (higher risk)",

    //     "50101": "Server-side XML injection vector",
    //     "50102": "Shell injection vector",
    //     "50103": "Query injection vector",
    //     "50104": "Format string vector",
    //     "50105": "Integer overflow vector",
    //     "50106": "File inclusion",
    //     "50107": "Remote file inclusion",
    //     "50201": "SQL query or similar syntax in parameters",
    //     "50301": "PUT request accepted",
    //     "50909": "Signature match detected (high risk)"
    //   };

    private static final Map<String, Integer> skipfishCweMap =
            new HashMap<String, Integer>() {
                {
                    put("40101", CweNumber.XSS);
                    put("40102", CweNumber.XSS);
                    put("40103", CweNumber.HTTP_RESPONSE_SPLITTING);
                    put("40105", CweNumber.XSS);
                    put("40501", CweNumber.PATH_TRAVERSAL);

                    put("50101", CweNumber.XSS); // ??
                    put("50102", CweNumber.COMMAND_INJECTION);
                    put("50103", CweNumber.SQL_INJECTION);
                }
            };

    @Override
    public boolean canRead(ResultFile resultFile) {
        return resultFile.isJavaScript() && isSkipFish(resultFile);
    }

    static class NameVisitor implements NodeVisitor {
        List<Name> ls;

        NameVisitor(List<Name> obj) {
            ls = obj;
        }

        @Override
        public boolean visit(AstNode node) {
            if (node instanceof Name) ls.add((Name) node);
            return true;
        }
    }

    List<Name> getNames(AstRoot ast) {
        List<Name> ls = new ArrayList<>();
        ast.visit(new NameVisitor(ls));
        return ls;
    }

    @Override
    public TestSuiteResults parse(ResultFile resultFile) throws Exception {
        TestSuiteResults tr =
                new TestSuiteResults("Skipfish", false, TestSuiteResults.ToolType.DAST);

        AstRoot ast = resultFile.asJavaScript();
        List<Name> ls = getNames(ast);

        Name issue_samples = ls.get(1);
        VariableInitializer varInit = (VariableInitializer) issue_samples.getParent();
        ArrayLiteral arr = (ArrayLiteral) varInit.getInitializer();

        // Loop over elements, they look like this
        // var issue_samples = [
        //     { 'severity': 4, 'type': 50103, 'samples': [
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002', 'extra':
        // 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to
        // \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/0' },
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra':
        // 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir':
        // '_i0/1' },
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra':
        // 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to
        // \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/2' },
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra':
        // 'response to \x27\x22 different than to \x5c\x27\x5c\x22', 'sid': '0', 'dir': '_i0/3' },
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra':
        // 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to
        // \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/4' },
        //         { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra':
        // 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir':
        // '_i0/5' },
        //         { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra':
        // 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir':
        // '_i0/6' } ]
        //     },
        //     { 'severity': 4, 'type': 50102, 'samples': [
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra':
        // 'responses to `true` and `false` different than to `uname`', 'sid': '0', 'dir': '_i1/0'
        // },
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra':
        // 'responses to `true` and `false` different than to `uname`', 'sid': '0', 'dir': '_i1/1'
        // },
        //         { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra':
        // 'responses to `true` and `false` different than to `uname`', 'sid': '0', 'dir': '_i1/2' }
        // ]
        //     }];

        // Rhino makes an AST like this:
        // 3439        VAR 3439 27538
        // 3443        VAR 4 27533
        // 3443          NAME 0 13 issue_samples
        // 3459          ARRAYLIT 16 27517
        // 3463            OBJECTLIT 4 1409
        // 3465              COLON 2 13
        // 3465                STRING 0 10 'severity'
        // 3477                NUMBER 12 1
        // 3480              COLON 17 13
        // 3480                STRING 0 6 'type'
        // 3488                NUMBER 8 5
        // 3495              COLON 32 1373
        // 3495                STRING 0 9 'samples'
        // 3506                ARRAYLIT 11 1362
        // 3512                  OBJECTLIT 6 208
        // 3514                    COLON 2 68

        for (AstNode typeNode : arr.getElements()) {
            if (typeNode instanceof ObjectLiteral) {
                ObjectLiteral typeInfo = (ObjectLiteral) typeNode;
                String type = "";
                List<String> testCases = new ArrayList<>();

                for (ObjectProperty property : typeInfo.getElements()) {
                    AstNode left = property.getLeft();
                    AstNode right = property.getRight();

                    if (left instanceof StringLiteral) {
                        StringLiteral nameLit = (StringLiteral) left;
                        String name = nameLit.getValue();

                        if (name.equals("type")) {
                            if (right instanceof NumberLiteral) {
                                type = ((NumberLiteral) right).getValue();
                            }
                        }

                        if (name.equals("samples")) {
                            if (right instanceof ArrayLiteral) {
                                for (AstNode sample : ((ArrayLiteral) right).getElements()) {
                                    ObjectLiteral sampleInfo = (ObjectLiteral) sample;
                                    for (ObjectProperty sampleProp : sampleInfo.getElements()) {
                                        AstNode sampleLeft = sampleProp.getLeft();
                                        AstNode sampleRight = sampleProp.getRight();
                                        if (sampleLeft instanceof StringLiteral) {
                                            StringLiteral sampleNameLit =
                                                    (StringLiteral) sampleLeft;
                                            if (sampleNameLit.getValue().equals("url")) {
                                                if (sampleRight instanceof StringLiteral) {
                                                    testCases.add(
                                                            ((StringLiteral) sampleRight)
                                                                    .getValue());
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Collect into test cases
                int cwe = skipfishCweMap.getOrDefault(type, CweNumber.DONTCARE);
                if (cwe != CweNumber.DONTCARE) {
                    for (String url : testCases) {
                        String className = (url.substring(url.lastIndexOf('/') + 1));
                        if (className.startsWith(BenchmarkScore.TESTCASENAME)) {
                            TestCaseResult tcr = new TestCaseResult();

                            tcr.setNumber(testNumber(className));
                            tcr.setCWE(cwe);
                            tcr.setEvidence(type);

                            tr.put(tcr);
                        }
                    }
                }
            }
        }

        return tr;
    }

    private Boolean isSkipFish(ResultFile resultFile) {

        if (!resultFile.isJavaScript()) {
            return false;
        }

        AstRoot ast = resultFile.asJavaScript();
        List<Name> ls = getNames(ast);

        if (ls.size() != 2) {
            return false;
        }

        if (!ls.get(0).getIdentifier().equals("mime_samples")) {
            return false;
        }

        if (!ls.get(1).getIdentifier().equals("issue_samples")) {
            return false;
        }

        return true;
    }
}
