var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL ||
                      "mongodb://localhost/mean-lab" );
module.exports.Toilet = require("./product.js");
