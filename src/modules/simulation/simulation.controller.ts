import { Body, Controller, Post } from '@nestjs/common';
import { SimulationService } from './simulation.service';

@Controller('simulation')
export class SimulationController {
  constructor(private readonly svc: SimulationService) {}

  @Post()
  run(@Body() payload: any) {
    return this.svc.run(payload);
  }
}
