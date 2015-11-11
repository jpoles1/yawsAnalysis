var page = require('webpage').create();
page.paperSize = { width: "48in", height: "48in"};
page.open('http://127.0.0.1:8080', function() {
    page.render('test.pdf');
    phantom.exit();
});