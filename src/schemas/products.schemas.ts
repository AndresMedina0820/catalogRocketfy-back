import Joi from 'joi';

const id = Joi.string().hex().length(24);
const name = Joi.string();
const description = Joi.string().max(300);
const sku = Joi.string();
const image = Joi.string();
const tags = Joi.array();
const stock = Joi.number().integer();
const price = Joi.number();

export const productSchemaCreate = Joi.object({
  name: name.required(),
  description: description,
  sku: sku.required(),
  image: image,
  tags: tags,
  stock: stock.required(),
  price: price.required(),
});

export const productSchemaUpdate = Joi.object({
  id: id.required(),
  name: name,
  description: description,
  sku: sku,
  image: image,
  tags: tags,
  stock: stock,
  price: price,
});

export const productSchemaDelete = Joi.object({
  id: id.required(),
});

export const productSchemaGet = Joi.object({
  id: id.required(),
});
