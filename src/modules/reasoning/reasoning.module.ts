import { Module } from '@nestjs/common';
import { ReasoningController } from './reasoning.controller';
import { ReasoningService } from './reasoning.service';

@Module({
  controllers: [ReasoningController],
  providers: [ReasoningService]
})
export class ReasoningModule {}
