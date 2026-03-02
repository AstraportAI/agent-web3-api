import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly svc: TransactionsService) {}

  @Post('construct')
  construct(@Body() payload: any) {
    return this.svc.construct(payload);
  }
}
