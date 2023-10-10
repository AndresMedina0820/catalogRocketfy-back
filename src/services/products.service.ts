import { NewProduct } from "../type";
import productSchema from "../models/products.model";
import boom from "@hapi/boom";

export const getProducts = (skip: number, limit: number, filter: Object) => {
  return productSchema
    .find(filter)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit)
    .then((data) => data)
    .catch((error) => {
      throw new Error(error);
    });
};

export const getById = async (id: string, skip: number, limit: number) => {
  const product = await productSchema.findById(id).skip(skip).limit(limit);
  return [product];
};

export const saveProduct = async (newProductEntry: NewProduct) => {
  const newProduct = new productSchema({
    ...newProductEntry,
    change_log: [{
      price: newProductEntry.price,
      stock: newProductEntry.stock,
    }],
  });

  return newProduct
    .save()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const updateProduct = (productEntry: NewProduct, id: string) => {
  return productSchema
    .findById(id)
    .then((data): any => {
      if (!data) {
        return boom.notFound("Producto no encontrado");
      }
      const dataUpdate = { ...productEntry, change_log: data.change_log };
      const lastChange = data.change_log[data.change_log.length - 1];

      if (lastChange?.price !== dataUpdate.price || lastChange?.stock !== dataUpdate.stock) {
        dataUpdate.change_log.push({
          price: productEntry.price,
          stock: productEntry.stock,
          timestamp: new Date(),
        });
      }

      return productSchema.updateOne({ _id: id }, { ...dataUpdate })
        .then(() => {
          return dataUpdate;
        })
        .catch((error) => {
          throw new Error(error);
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const deleteProduct = (id: string) => {
  return productSchema
    .findByIdAndRemove(id)
    .then((data) => {
      if (data) {
        return data;
      }
      return null;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const countProducts = () => {
  return productSchema
    .count()
    .then((data) => {
      if (data) {
        return data;
      }
      return null;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
