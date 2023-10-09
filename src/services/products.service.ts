import { NewProduct } from "../type";
import productSchema from "../models/products.model";

export const getProducts = (skip: number, limit: number, filter: Object) => {
  return productSchema
    .find(filter)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit)
    .then((data) => data)
    .catch((error) => console.error("ERROR getProducts", error));
};

export const getById = async (id: string, skip: number, limit: number) => {
  const product = await productSchema.findById(id).skip(skip).limit(limit);
  return [product];
};

export const saveProduct = async (newProductEntry: NewProduct) => {
  const newProduct = new productSchema({
    ...newProductEntry,
    change_log: {},
  });

  return newProduct
    .save()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al guardar el producto:", error);
    });
};

export const updateProduct = (productEntry: NewProduct, id: string) => {
  return productSchema
  .findByIdAndUpdate(id, { ...productEntry })
  .then((data) => {
    if (data) {
      return data;
    }
    return [];
  })
  .catch((error) => {
    console.error("Error al actualizar el producto:", error);
  });

  // return productSchema
  //   .findById(id)
  //   .then((data: any) => {
  //     if (productEntry.price !== data.price) {
  //       console.log("ENTREEEEE");
  //       productEntry.change_log?.push({
  //         price: productEntry.price,
  //         stock: productEntry.stock,
  //         timestamp: Date.now(),
  //       });

  //       console.log("productEntry", productEntry);
  //     }

  //     return productSchema
  //       .findByIdAndUpdate(id, { ...productEntry })
  //       .then((data) => {
  //         if (data) {
  //           return data;
  //         }
  //         return [];
  //       })
  //       .catch((error) => {
  //         console.error("Error al actualizar el producto:", error);
  //       });
  //   })
  //   .catch((error) => {
  //     console.error("Error al actualizar el producto:", error);
  //   });
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
      console.error("Error al eliminar el producto:", error);
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
      console.error("Error al obtener el total de productos:", error);
    });
};
