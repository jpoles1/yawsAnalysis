var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');
var options = {"height": "48in", "width": "50in"};

pdf.create(html, options).toFile('./index.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res);
});