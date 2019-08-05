var express = require('express'),
    bodyParser  = require("body-parser"),
    app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var vendorRoutes   = require("./routes/vendor");
app.use("/vendor", vendorRoutes);
app.get('/', function (req, res) {
 res.render("index.ejs");
});
app.listen(process.env.PORT || 3001, function () {
 console.log('Example app listening on port !');
});