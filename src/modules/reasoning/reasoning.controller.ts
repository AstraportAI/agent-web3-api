import { Body, Controller, Post } from '@nestjs/common';
import { ReasoningService } from './reasoning.service';

@Controller('reasoning')
export class ReasoningController {
  constructor(private readonly svc: ReasoningService) {}

  @Post('intent')
  intent(@Body() payload: any) {
    return this.svc.handleIntent(payload);
  }
}
