import { Body, Controller, Get, Post } from '@nestjs/common';
import { RpcService } from './rpc.service';

@Controller('rpc')
export class RpcController {
  constructor(private readonly svc: RpcService) {}

  @Get('status')
  status() {
    return this.svc.status();
  }

  @Post()
  call(@Body() payload: any) {
    return this.svc.call(payload);
  }
}
