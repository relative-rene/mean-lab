var mongoose = require("mongoose");
  var Schema = mongoose.Schema;

  var ProductSchema = new Schema ({
   Name: String,
   price: Number,
   type: [String]
  });

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
