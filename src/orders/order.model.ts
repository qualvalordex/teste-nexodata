import { Product } from 'src/products/product.model';

export class Order {
  orderId: number;
  products: Array<Product>;
  status: string;
}
