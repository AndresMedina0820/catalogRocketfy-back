const express = require('express');
import productRouter from './products.route';

const routerApi = (app: any) => {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', productRouter);
}

export default routerApi;
