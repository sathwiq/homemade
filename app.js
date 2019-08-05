var express = require('express'),
    bodyParser  = require("body-parser"),
    app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var admin = require("firebase-admin");

var serviceAccount = require("./views/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://homemade-de936.firebaseio.com"
});
let db = admin.firestore();
var vendorRoutes   = require("./routes/vendor");
app.use("/vendor", vendorRoutes);
app.get('/', function (req, res) {
    db.collection('menu').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
        // db.collection('doc.id.menu.id').get()
        //     .then((snapshot) => {
        //         snapshot.forEach((doc) => {
                    
        //         console.log(doc.id);
        //         })
    //   console.log(doc.id);
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  
 res.render("index.ejs");
});
app.listen(process.env.PORT || 3001, function () {
 console.log('Example app listening on port !');
})