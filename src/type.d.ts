export interface IProduct {
  id: { $oid: string };
  name: string;
  description: string;
  sku: string;
  image: string;
  tags: string;
  stock: number;
  price: number;
  change_log?: {
    stock: number;
    price: number;
    timestamp: Date | number;
  }[]
}

export type NewProduct = Omit<IProduct, 'id'>
