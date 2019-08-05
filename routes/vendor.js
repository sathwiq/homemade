var express = require('express'),
     router = express.Router(); 

router.get('/', (req, res) => {
    res.render("vendor.ejs");
});
router.post("/",  function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
});
module.exports = router;