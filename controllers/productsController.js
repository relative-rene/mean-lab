/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/products
function index(req, res) {
  db.Product.find({}, function(err, allProducts) {
    res.json(allProducts);
  });
}

function create(req, res) {
  console.log('body', req.body);

  // split at comma and remove and trailing space
  if (req.body.genres) {
    var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
    req.body.genres = genres;
  }

  db.Product.create(req.body, function(err, product) {
    if (err) { console.log('error', err); }
    console.log(product);
    res.json(product);
  });
}

function show(req, res) {
  db.Product.findById(req.params.productId, function(err, foundProduct) {
    if(err) { console.log('productsController.show error', err); }
    console.log('productsController.show responding with', foundProduct);
    res.json(foundProduct);
  });
}

function destroy(req, res) {
  db.Product.findOneAndRemove({ _id: req.params.productId }, function(err, foundProduct){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundProduct);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Product.findById(req.params.productId, function(err, foundProduct) {
    if(err) { console.log('productsController.update error', err); }
    foundProduct.type = req.body.type;
    foundProduct.name = req.body.name;
    foundProduct.price = req.body.price;
    foundProduct.save(function(err, savedProduct) {
      if(err) { console.log('saving altered product failed'); }
      res.json(savedProduct);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
