import { Module, HttpModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BoostrInterceptor } from './shared/interceptors/boostr.interceptor';
import { AuthService } from './auth/auth.service';
import { RequestContextModule } from './shared/request-context/request-context.module';
import { RequestContextMiddleware } from './shared/request-context/request-context.middleware';
import { LayoutModule } from './layout/layout.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { GridModule } from './grid/grid.module';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    RequestContextModule,
    InMemoryDBModule.forRoot({}),
    LayoutModule,
    GridModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthService,

    {
      provide: APP_INTERCEPTOR,
      useClass: BoostrInterceptor,
    }],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
