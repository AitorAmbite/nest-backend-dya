import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/dyadebo.tk-0001/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/dyadebo.tk-0001/fullchain.pem'),
  };
  const app = await NestFactory.create(AppModule,{
    httpsOptions,
  });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  ); // this autovalidate that recieved data is correct.
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
