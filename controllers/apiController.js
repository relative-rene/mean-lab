function index(req, res) {
  res.json({
    message: "Welcome to our shopping app. Please do not make a mess..",
    documentation_url: "",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/products", description: "Shows all available toilet db as json"},
      {method: "GET", path: "/api/product/:id", description: "Shows specific product with id"},
      {method: "POST", path: "/api/products", description: "Allows posting new toilets"},
      {method: "DELETE", path: "/api/products/:id", description: "Allows deleting data"},
      {method: "PUT", path: "/api/products/:id", description: "Allows updating database"}
    ]
  });
}

module.exports.index = index;
