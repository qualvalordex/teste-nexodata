import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Post,
} from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { ProductsService } from 'src/products/products.service';
import { Order } from './order.model';

export interface ProductDTO {
  productId: number;
  quantity: number;
}

export interface OrderDTO {
  clientId: number;
  products: Array<ProductDTO>;
}

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ClientsService)
    public clientsService: ClientsService,
    @Inject(ProductsService)
    public productsService: ProductsService,
  ) {}

  public orders: Order[] = [];

  findAll(): Order[] {
    return this.orders;
  }

  createOrder(order: OrderDTO) {
    // Verify if there is at least one product in the order
    if (!order.products?.length) {
      throw new HttpException(
        'Products could not be empty.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Verify if client exists
    const client = this.clientsService.clients.find(
      (client) => client.clientId === order.clientId,
    );

    if (!client) {
      throw new HttpException('Client not found.', HttpStatus.NOT_FOUND);
    }

    // Verify if there are enought products
    const productsToOrder = [];
    for (const orderedProduct of order.products) {
      const product = this.productsService.products.find(
        (product) => product.productId === orderedProduct.productId,
      );

      if (product.currentQuantity < orderedProduct.quantity) {
        throw new HttpException(
          'There are not enought products for this order.',
          HttpStatus.OK,
        );
      }

      productsToOrder.push(product);
    }

    this.orders.push({
      orderId: 1,
      products: productsToOrder,
      status: 'Waiting for payment',
    });
  }
}
