import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const port = process.env.NESTJS_APP_DOCKER_PORT;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS so we can access the application from a different origin
  app.enableCors();

  // Start the application
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await app.listen(port).then((_value) => {
    console.log(`Server started at http://localhost:${port}`);
  });

  // This is necessary to make the hot-reload work with Docker
  if (module.hot) {
    console.log(1);
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
