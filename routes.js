const routes = require('next-routes');

module.exports = routes()                     
  .add('product', '/product/:id');
