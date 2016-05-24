var mongoose = require("mongoose");
  var Schema = mongoose.Schema;

  var ProductSchema = new Schema ({
   name: String,
   price: Number,
   type: [String]
  });

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
