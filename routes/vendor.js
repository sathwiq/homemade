var express = require('express'),
     router = express.Router(); 
var admin = require("firebase-admin");

// var serviceAccount = require("../views/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://homemade-de936.firebaseio.com"
// });
let db = admin.firestore();
router.get('/', (req, res) => {
    res.render("vendor.ejs");
});
router.post("/",  function(req, res){
    // get data from form and add to campgrounds array

    let data = {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        email : req.body.email,
        image : req.body.image,
        
        menu :  [
            {
                name : "coke",
                price : '12',
                image : 'url'
            }
        ]
      };
      db.collection('vendor').doc('').set(data);
});
module.exports = router;