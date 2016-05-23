var db = require('../models');

function index(req, res) {
  db.Product.find({},function (err, product){
    if (!err) {
        res.json(product);
      } else {
        console.log("Can not get api/product db" + err);
      }
  });
}

function create(req, res) {

 var newProduct = new db.Product ({
   name: req.body.name,
   price: req.body.price,
   type: req.body.type
 });
 newToilet.save(function (err, product){
   if (err) {
     return console.log("save error: " + err);
   }
   console.log("saved", product.name);
   res.json(product);

 });
}

function show(req, res) {
  db.Product.findById(req.params.ProductId, function(err, found) {
      if (err) {
      console.log('Show Error:', err);
    } else {
      res.json(found);
    }
    });
}


module.exports = {
  index: index,
  create: create,
  show: show,
  // destroy: destroy,
  // update: update
};
