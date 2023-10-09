import { Router } from 'express';
import { getAllProducts, getProductsById, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductsById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
