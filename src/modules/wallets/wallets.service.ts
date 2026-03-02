import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletsService {
  create(payload: any) {
    // Return a fake wallet/address for scaffold purposes
    return {
      address: '0xDEADBEEF',
      chain: payload?.chain ?? 'ethereum',
      createdAt: new Date().toISOString()
    };
  }
}
