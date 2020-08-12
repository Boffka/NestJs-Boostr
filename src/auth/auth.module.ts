import { HttpModule, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RequestContextModule } from '../shared/request-context/request-context.module';

@Module({
  imports:[
    RequestContextModule,
    HttpModule.register({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
