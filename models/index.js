var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL ||
                      "mongodb://localhost/mean-lab" );
module.exports.Toilet = require("./toilet.js");
module.exports.Rating = require("./rating.js");
