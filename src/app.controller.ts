import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return this.appService.getRoot();
  }

  @Post('simulate')
  simulate(@Body() payload: any) {
    return { ok: true, payload };
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }

  @Get('balance/:chain/:address')
  getBalance(@Param('chain') chain: string, @Param('address') address: string) {
    return { chain, address, balance: '0.0' };
  }
}
