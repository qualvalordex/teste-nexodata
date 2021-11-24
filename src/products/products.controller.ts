import { Controller, Get, Inject } from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(ProductsService)
    private productsService: ProductsService,
  ) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }
}
