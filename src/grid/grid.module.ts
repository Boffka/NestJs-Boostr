import { HttpModule, Module } from '@nestjs/common';
import { GridController } from './grid.controller';
import { GridService } from './grid.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AuthService } from '../auth/auth.service';
import { RequestContextModule } from '../shared/request-context/request-context.module';

@Module({
  imports:[
    HttpModule,
    InMemoryDBModule.forFeature('grid', {}),
    RequestContextModule
  ],
  controllers: [GridController],
  providers: [GridService, AuthService]
})
export class GridModule {}
