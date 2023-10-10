import { RequestHandler } from 'express';
import * as productServices from "../services/products.service";

export const getAllProducts: RequestHandler = async (_req, res, next) => {
  const limit = Number(_req?.query?.limit) || 5;
  const skip = Number(_req?.query?.skip);
  const queryObj = _req?.query?.query || '';
  const filters: any = {};
  let parsedQuery;

  if (queryObj) {
    parsedQuery = JSON.parse(queryObj.toString());
    for (const key in parsedQuery) {
      if (parsedQuery.hasOwnProperty(key)) {
        filters[key] = { $regex: new RegExp(parsedQuery[key], 'i') };
      }
    }
  }

  try {
    const products = await productServices.getProducts(skip, limit, filters);
    const total = await productServices.countProducts();
    res.status(200).json({ status: 'OK', data: products, total: total || 0 });
  } catch (error: any) {
    next(error);
  }
}

export const getProductsById: RequestHandler = async (_req, res, next) => {
  const { id } = _req.params;
  const currentlyPage = 1;
  const limit = 10;
  const skip = (currentlyPage - 1) * limit;

  try {
    const product = await productServices.getById(id, skip, limit);
    res.status(200).json({ status: 'OK', data: product });
  } catch (error: any) {
    next(error);
  }
}

export const createProduct: RequestHandler = async (_req, res, next) => {
  try {
    const { body } = _req;
    const product = await productServices.saveProduct(body);
    res.status(200).json({ status: 'OK', data: product });
  } catch (error: any) {
    next(error);
  }
}

export const updateProduct: RequestHandler = async (_req, res, next) => {
  try {
    const { id } = _req.params;
    const { body } = _req;
    const product = await productServices.updateProduct(body, id);
    res.status(201).json({ status: 'OK', data: product });
  } catch (error: any) {
    next(error);
  }
}

export const deleteProduct: RequestHandler = async (_req, res, next) => {
  try {
    const { id } = _req.params;
    const productId = await productServices.deleteProduct(id);
    res.status(201).json({ status: 'OK', data: { id: productId } });
  } catch (error: any) {
    next(error);
  }
}
