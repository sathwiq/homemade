var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.set("view engine", "ejs");
app.get('/', function (req, res) {
 res.render("index.ejs");
});
app.listen(port, function () {
 console.log('Example app listening on port !');
});