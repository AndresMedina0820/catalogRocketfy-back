import { Router } from "express";
import {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller";
import {
  productSchemaCreate,
  productSchemaUpdate,
  productSchemaDelete,
  productSchemaGet,
} from "../schemas/products.schemas";
import { validatorHandler } from "../middleware/validatorSchemas.middleware";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", validatorHandler(productSchemaGet, 'params'), getProductsById);
router.post("/", validatorHandler(productSchemaCreate, 'body'), createProduct);
router.patch("/:id", validatorHandler(productSchemaUpdate, 'params'), updateProduct);
router.delete("/:id", validatorHandler(productSchemaDelete, 'params'), deleteProduct);

export default router;
