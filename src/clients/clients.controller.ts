import { Controller, Get, Inject } from '@nestjs/common';
import { Client } from './client.model';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(
    @Inject(ClientsService)
    private clientsService: ClientsService,
  ) {}

  @Get(':id')
  findOne(id: number): Client {
    return this.clientsService.findOne(id);
  }

  @Get()
  findall(): Client[] {
    return this.clientsService.findAll();
  }
}
