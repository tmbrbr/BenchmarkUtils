package org.owasp.benchmarkutils.score.parsers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertInstanceOf;

import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mozilla.javascript.Token;
import org.mozilla.javascript.ast.ArrayLiteral;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.VariableInitializer;
import org.owasp.benchmarkutils.score.BenchmarkScore;
import org.owasp.benchmarkutils.score.CweNumber;
import org.owasp.benchmarkutils.score.ResultFile;
import org.owasp.benchmarkutils.score.TestHelper;
import org.owasp.benchmarkutils.score.TestSuiteResults;

public class SkipfishReaderTest extends ReaderTestBase {

    private ResultFile resultFile;

    @BeforeEach
    void setUp() {
        resultFile = TestHelper.resultFileOf("testfiles/Benchmark_Skipfish.js");
        BenchmarkScore.TESTCASENAME = "BenchmarkTest";
    }

    @Test
    void onlySkipfishReaderReportsCanReadAsTrue() {
        assertOnlyMatcherClassIs(this.resultFile, SkipfishReader.class);
    }

    @Test
    void checkNames() {
        AstRoot ast = resultFile.asJavaScript();
        SkipfishReader reader = new SkipfishReader();

        List<Name> ls = reader.getNames(ast);
        assertEquals(2, ls.size());

        assertEquals("mime_samples", ls.get(0).getIdentifier());
        assertEquals("issue_samples", ls.get(1).getIdentifier());

        AstNode issue_samples = ls.get(1);
        assertEquals(Token.VAR, issue_samples.getParent().getType());
        assertInstanceOf(VariableInitializer.class, issue_samples.getParent());

        VariableInitializer varInit = (VariableInitializer) issue_samples.getParent();
        assertInstanceOf(ArrayLiteral.class, varInit.getInitializer());
    }

    @Test
    void readerHandlesGivenResultFile() throws Exception {
        SkipfishReader reader = new SkipfishReader();
        TestSuiteResults result = reader.parse(resultFile);

        assertEquals(TestSuiteResults.ToolType.DAST, result.getToolType());
        assertFalse(result.isCommercial());
        assertEquals("Skipfish", result.getToolName());

        assertEquals(3, result.getTotalResults());

        assertEquals(CweNumber.SQL_INJECTION, result.get(2).get(0).getCWE());
    }
}
