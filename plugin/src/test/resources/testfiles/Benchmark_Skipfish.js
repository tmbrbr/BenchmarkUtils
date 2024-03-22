var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/js/testsuiteutils.js', 'dir': '_m0/0', 'linked': 2, 'len': 8712 },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'dir': '_m0/1', 'linked': 5, 'len': 16 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00014.html', 'dir': '_m1/0', 'linked': 2, 'len': 1098 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00012.html', 'dir': '_m1/1', 'linked': 2, 'len': 1088 },
    { 'url': 'https://benchmark:8443/benchmark/', 'dir': '_m1/2', 'linked': 5, 'len': 1011 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002', 'dir': '_m1/3', 'linked': 5, 'len': 246 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002', 'dir': '_m1/4', 'linked': 5, 'len': 264 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00006', 'dir': '_m1/5', 'linked': 5, 'len': 1443 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/j_security_check', 'dir': '_m1/6', 'linked': 5, 'len': 705 },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001.html', 'dir': '_m1/7', 'linked': 2, 'len': 1026 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-Index.html', 'dir': '_m1/8', 'linked': 2, 'len': 1670 },
    { 'url': 'https://benchmark:8443/manager/', 'dir': '_m1/9', 'linked': 2, 'len': 3529 } ]
  },
  { 'mime': 'image/png', 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/captcha/captcha.png', 'dir': '_m2/0', 'linked': 2, 'len': 2475 } ]
  },
  { 'mime': 'image/x-ms-bmp', 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/favicon.ico', 'dir': '_m3/0', 'linked': 2, 'len': 3638 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/css/normalize.css', 'dir': '_m4/0', 'linked': 2, 'len': 7793 },
    { 'url': 'https://benchmark:8443/benchmark/css/skeleton.css', 'dir': '_m4/1', 'linked': 2, 'len': 11452 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'https://benchmark:8443/', 'dir': '_m5/0', 'linked': 2, 'len': 682 },
    { 'url': 'https://benchmark:8443/benchmark/rest/', 'dir': '_m5/1', 'linked': 0, 'len': 4615 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00004', 'dir': '_m5/2', 'linked': 5, 'len': 59 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'dir': '_m5/3', 'linked': 5, 'len': 250 },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'dir': '_m5/4', 'linked': 0, 'len': 3693 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/js/jquery.min.js', 'dir': '_m6/0', 'linked': 2, 'len': 84380 },
    { 'url': 'https://benchmark:8443/benchmark/js/js.cookie.js', 'dir': '_m6/1', 'linked': 2, 'len': 1726 },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=SafeText', 'dir': '_m6/2', 'linked': 5, 'len': 8 },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=Documents%20and%20Settings', 'dir': '_m6/3', 'linked': 0, 'len': 22 } ]
  },
  { 'mime': 'text/xml', 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'dir': '_m7/0', 'linked': 5, 'len': 25 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50103, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'response to \x27\x22 different than to \x5c\x27\x5c\x22', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/6' } ]
  },
  { 'severity': 4, 'type': 50102, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses to `true` and `false` different than to `uname`', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses to `true` and `false` different than to `uname`', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses to `true` and `false` different than to `uname`', 'sid': '0', 'dir': '_i1/2' } ]
  },
  { 'severity': 4, 'type': 50101, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for \x3csfish\x3e\x3c/sfish\x3e and \x3c/sfish\x3e\x3csfish\x3e look different', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for \x3csfish\x3e\x3c/sfish\x3e and \x3c/sfish\x3e\x3csfish\x3e look different', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for \x3csfish\x3e\x3c/sfish\x3e and \x3c/sfish\x3e\x3csfish\x3e look different', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for \x3csfish\x3e\x3c/sfish\x3e and \x3c/sfish\x3e\x3csfish\x3e look different', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for \x3csfish\x3e\x3c/sfish\x3e and \x3c/sfish\x3e\x3csfish\x3e look different', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for \x3csfish\x3e\x3c/sfish\x3e and \x3c/sfish\x3e\x3csfish\x3e look different', 'sid': '0', 'dir': '_i2/5' } ]
  },
  { 'severity': 3, 'type': 40501, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i3/9' } ]
  },
  { 'severity': 3, 'type': 40401, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/js/jquery.min.js', 'extra': 'Delimited database dump', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'https://benchmark:8443/benchmark/js/js.cookie.js', 'extra': 'Delimited database dump', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=/../../../WEB-INF/web.xml', 'extra': 'CVS RCS data', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'CVS RCS data', 'sid': '0', 'dir': '_i4/3' } ]
  },
  { 'severity': 3, 'type': 40301, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=http://skipfish.invalid/%3B%3F', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/xml', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 2, 'type': 30801, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=%2B/skipfish-bom', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00004', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00006', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00008', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00012', 'extra': '', 'sid': '0', 'dir': '_i7/5' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00014', 'extra': '', 'sid': '0', 'dir': '_i7/6' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00016', 'extra': '', 'sid': '0', 'dir': '_i7/7' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=SafeText', 'extra': '', 'sid': '0', 'dir': '_i7/8' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00005', 'extra': '', 'sid': '0', 'dir': '_i7/9' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i7/10' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00011', 'extra': '', 'sid': '0', 'dir': '_i7/11' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013', 'extra': '', 'sid': '0', 'dir': '_i7/12' } ]
  },
  { 'severity': 2, 'type': 30205, 'samples': [
    { 'url': 'https://benchmark:8443/', 'extra': 'TLS_AES_256_GCM_SHA384', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 2, 'type': 30203, 'samples': [
    { 'url': 'https://benchmark:8443/', 'extra': 'OWASP Benchmark', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 2, 'type': 30202, 'samples': [
    { 'url': 'https://benchmark:8443/', 'extra': '/C=US/ST=MD/L=Columbia/O=OWASP/OU=OWASP/CN=OWASP Benchmark', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 2, 'type': 30201, 'samples': [
    { 'url': 'https://benchmark:8443/', 'extra': '', 'sid': '0', 'dir': '_i11/0' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'Responses too slow for time sensitive tests', 'sid': '0', 'dir': '_i12/1' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i12/2' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00011.html?BenchmarkTest00011=9876sfi', 'extra': 'Responses too slow for time sensitive tests', 'sid': '0', 'dir': '_i12/3' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i12/4' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i12/5' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i12/6' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i12/7' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i12/8' } ]
  },
  { 'severity': 1, 'type': 20203, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/0' },
    { 'url': 'https://benchmark:8443/benchmark/captcha/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/1' },
    { 'url': 'https://benchmark:8443/benchmark/css/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/2' },
    { 'url': 'https://benchmark:8443/benchmark/js/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/3' },
    { 'url': 'https://benchmark:8443/benchmark/rest/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/4' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/5' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/6' },
    { 'url': 'https://benchmark:8443/benchmark/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/7' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/8' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/9' },
    { 'url': 'https://benchmark:8443/docs/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/10' },
    { 'url': 'https://benchmark:8443/manager/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/11' },
    { 'url': 'https://benchmark:8443/manager/conf/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/12' },
    { 'url': 'https://benchmark:8443/manager/conf/tomcat-users.xml/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i13/13' } ]
  },
  { 'severity': 0, 'type': 10902, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'response to [0][\x27name\x27]=... identical to name=...', 'sid': '0', 'dir': '_i14/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': 'response to [0][\x27name\x27]=... identical to name=...', 'sid': '0', 'dir': '_i14/1' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'response to [0][\x27name\x27]=... identical to name=...', 'sid': '0', 'dir': '_i14/2' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002', 'extra': '', 'sid': '0', 'dir': '_i15/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002.html', 'extra': '', 'sid': '0', 'dir': '_i15/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00004', 'extra': '', 'sid': '0', 'dir': '_i15/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00004.html', 'extra': '', 'sid': '0', 'dir': '_i15/3' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00006', 'extra': '', 'sid': '0', 'dir': '_i15/4' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00006.html', 'extra': '', 'sid': '0', 'dir': '_i15/5' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00008', 'extra': '', 'sid': '0', 'dir': '_i15/6' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00008.html', 'extra': '', 'sid': '0', 'dir': '_i15/7' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i15/8' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010.html', 'extra': '', 'sid': '0', 'dir': '_i15/9' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00012.html', 'extra': '', 'sid': '0', 'dir': '_i15/10' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00014.html', 'extra': '', 'sid': '0', 'dir': '_i15/11' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00016.html', 'extra': '', 'sid': '0', 'dir': '_i15/12' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001', 'extra': '', 'sid': '0', 'dir': '_i15/13' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001.html', 'extra': '', 'sid': '0', 'dir': '_i15/14' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00003', 'extra': '', 'sid': '0', 'dir': '_i15/15' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00005', 'extra': '', 'sid': '0', 'dir': '_i15/16' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00005.html', 'extra': '', 'sid': '0', 'dir': '_i15/17' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00007', 'extra': '', 'sid': '0', 'dir': '_i15/18' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i15/19' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009.html', 'extra': '', 'sid': '0', 'dir': '_i15/20' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00011', 'extra': '', 'sid': '0', 'dir': '_i15/21' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00011.html', 'extra': '', 'sid': '0', 'dir': '_i15/22' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013', 'extra': '', 'sid': '0', 'dir': '_i15/23' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013.html', 'extra': '', 'sid': '0', 'dir': '_i15/24' },
    { 'url': 'https://benchmark:8443/benchmark/404.html', 'extra': '', 'sid': '0', 'dir': '_i15/25' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i15/26' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i15/27' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i15/28' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i15/29' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i15/30' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/css/normalize.css', 'extra': '', 'sid': '0', 'dir': '_i16/0' },
    { 'url': 'https://benchmark:8443/benchmark/css/skeleton.css', 'extra': '', 'sid': '0', 'dir': '_i16/1' },
    { 'url': 'https://benchmark:8443/benchmark/js/jquery.min.js', 'extra': '', 'sid': '0', 'dir': '_i16/2' },
    { 'url': 'https://benchmark:8443/benchmark/js/js.cookie.js', 'extra': '', 'sid': '0', 'dir': '_i16/3' },
    { 'url': 'https://benchmark:8443/benchmark/js/testsuiteutils.js', 'extra': '', 'sid': '0', 'dir': '_i16/4' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=SafeText', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/0' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=Documents%20and%20Settings', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/1' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=SafeText', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/2' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/3' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/4' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i17/5' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/6' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/7' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/8' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/9' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/10' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i17/11' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/12' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00013', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/13' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/14' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/15' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': 'text/plain', 'sid': '0', 'dir': '_i17/16' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/j_security_check', 'extra': '', 'sid': '0', 'dir': '_i18/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/j_security_check', 'extra': '', 'sid': '0', 'dir': '_i18/1' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/j_security_check', 'extra': '', 'sid': '0', 'dir': '_i18/2' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/j_security_check', 'extra': '', 'sid': '0', 'dir': '_i18/3' },
    { 'url': 'https://benchmark:8443/benchmark/j_security_check', 'extra': '', 'sid': '0', 'dir': '_i18/4' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i19/0' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i19/1' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i19/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i19/3' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i19/4' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i19/5' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i19/6' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i19/7' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00014.html', 'extra': 'secure', 'sid': '0', 'dir': '_i20/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00014.html', 'extra': 'productID', 'sid': '0', 'dir': '_i20/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00012.html', 'extra': 'captcha', 'sid': '0', 'dir': '_i20/2' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/rest/', 'extra': '', 'sid': '0', 'dir': '_i21/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00006', 'extra': '', 'sid': '0', 'dir': '_i21/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i21/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i21/3' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00001?password=skipfish&BenchmarkTest00001=Documents%20and%20Settings', 'extra': '', 'sid': '0', 'dir': '_i21/4' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i21/5' },
    { 'url': 'https://benchmark:8443/benchmark/xss-00/BenchmarkTest00009', 'extra': '', 'sid': '0', 'dir': '_i21/6' },
    { 'url': 'https://benchmark:8443/benchmark/404.html', 'extra': '', 'sid': '0', 'dir': '_i21/7' },
    { 'url': 'https://benchmark:8443/benchmark/Index.html', 'extra': '', 'sid': '0', 'dir': '_i21/8' },
    { 'url': 'https://benchmark:8443/benchmark/login.html', 'extra': '', 'sid': '0', 'dir': '_i21/9' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/rest/', 'extra': '', 'sid': '0', 'dir': '_i22/0' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00002', 'extra': '', 'sid': '0', 'dir': '_i22/1' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i22/2' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i22/3' },
    { 'url': 'https://benchmark:8443/benchmark/sqli-00/BenchmarkTest00010', 'extra': '', 'sid': '0', 'dir': '_i22/4' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/rest/', 'extra': '', 'sid': '0', 'dir': '_i23/0' },
    { 'url': 'https://benchmark:8443/manager/', 'extra': '', 'sid': '0', 'dir': '_i23/1' },
    { 'url': 'https://benchmark:8443/manager/conf/', 'extra': '', 'sid': '0', 'dir': '_i23/2' },
    { 'url': 'https://benchmark:8443/manager/conf/tomcat-users.xml/', 'extra': '', 'sid': '0', 'dir': '_i23/3' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'https://benchmark:8443/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i24/0' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i25/0' },
    { 'url': 'https://benchmark:8443/benchmark/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i25/1' },
    { 'url': 'https://benchmark:8443/benchmark/rest/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i25/2' },
    { 'url': 'https://benchmark:8443/benchmark/rest/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i25/3' },
    { 'url': 'https://benchmark:8443/benchmark/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i25/4' },
    { 'url': 'https://benchmark:8443/benchmark/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i25/5' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'https://benchmark:8443/benchmark/captcha/captcha.png', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i26/0' } ]
  }
];

