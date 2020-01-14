// in reality, would be an actual datastore
const data = require('./products.json');

module.exports = function (gasket, app) {
  app.get('/egg', function (req, res) {
    res.send('wat');
  });

  app.get('/api/products', function (req, res) {
    res.json(data);
  });

  app.get('/api/products/:id', function (req, res) {
    const product = data[req.params.id];

    if(!product) {
      res.json({});
    } else {
      res.json(product);
    }
  });
}
