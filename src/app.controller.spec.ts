import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
        providers: [AppService]
      }).compile();

      appController = (module as any).get(AppController) as AppController;
  });

  it('should return welcome message', () => {
    expect(appController.getRoot()).toEqual({ message: 'Welcome to stellarAgent-api (NestJS scaffold)' });
  });
});
