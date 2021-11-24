import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  public products: Product[] = [
    { productId: 1, isActive: true, currentQuantity: 10 },
    { productId: 2, isActive: true, currentQuantity: 0 },
    { productId: 1, isActive: false, currentQuantity: 3 },
  ];

  findAll(): Product[] {
    return this.products;
  }
}
