import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsService } from 'src/clients/clients.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [OrdersService, ClientsService, ProductsService],
  controllers: [OrdersController],
})
export class OrdersModule {}
