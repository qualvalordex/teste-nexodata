import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Order } from './order.model';
import { OrderDTO, OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(OrdersService)
    private ordersService: OrdersService,
  ) {}

  @Get()
  findAll(): Order[] {
    return this.ordersService.findAll();
  }

  @Post()
  createOrder(@Body() order: OrderDTO) {
    return this.ordersService.createOrder(order);
  }
}
