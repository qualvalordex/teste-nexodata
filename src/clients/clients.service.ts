import { Injectable } from '@nestjs/common';
import { Client } from './client.model';

@Injectable()
export class ClientsService {
  public clients: Client[] = [
    { clientId: 1, name: 'Paulo' },
    { clientId: 2, name: 'Beatriz' },
    { clientId: 3, name: 'Larissa' },
    { clientId: 4, name: 'Bárbara' },
  ];

  findAll(): Client[] {
    return this.clients;
  }

  findOne(id: number): Client {
    return this.clients.find((client) => client.clientId === id);
  }
}
