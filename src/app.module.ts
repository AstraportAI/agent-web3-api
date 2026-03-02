import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { WalletsModule } from './modules/wallets/wallets.module';
import { SimulationModule } from './modules/simulation/simulation.module';
import { ReasoningModule } from './modules/reasoning/reasoning.module';
import { RpcModule } from './modules/rpc/rpc.module';

@Module({
  imports: [TransactionsModule, WalletsModule, SimulationModule, ReasoningModule, RpcModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
