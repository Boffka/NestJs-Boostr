import { HttpModule, Module } from '@nestjs/common';
import { LayoutController } from './layout.controller';
import { LayoutService } from './layout.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AuthService } from '../auth/auth.service';
import { RequestContextModule } from '../shared/request-context/request-context.module';

@Module({
  imports:[
    HttpModule,
    RequestContextModule,
    InMemoryDBModule.forFeature('layout', {})
  ],
  controllers: [LayoutController],
  providers: [LayoutService, AuthService]
})
export class LayoutModule {}
