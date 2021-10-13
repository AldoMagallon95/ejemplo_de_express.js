const productsRouter = require('./productRoutes');
// const usersRouter = require('./users.router');

function routerApi(app){
  app.use('/products' , productsRouter);
  // app.use('/users' , usersRouter);
  // app.use('/categories')

}

module.exports = routerApi;
