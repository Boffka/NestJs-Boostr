import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from './config.const';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .addServer(`http://localhost:${CoreConfig.app.port}`)
    .setTitle('Boostr UI/AI')
    .setDescription('UI meta service')
    .setVersion('1.0')
    .addTag('boostr')
    .addBearerAuth({type:'http', bearerFormat: 'authorization'})
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(CoreConfig.app.port);
}

bootstrap().then();