// in reality, would be an actual datastore
const data = require('./products.json');

module.exports = function (gasket, app) {
  app.get('/egg', function (req, res) {
    res.send('wat');
  });

  app.get('/products', function (req, res) {
    res.json(data);
  })
}
