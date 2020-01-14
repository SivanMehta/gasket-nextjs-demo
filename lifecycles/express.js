module.exports = function (gasket, app) {
  app.get('/egg', function (req, res) {
    res.send('wat');
  })
}
