import { Body, Controller, Post } from '@nestjs/common';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly svc: WalletsService) {}

  @Post('create')
  create(@Body() body: any) {
    return this.svc.create(body);
  }
}
