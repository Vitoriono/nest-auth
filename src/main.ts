import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

const PORT = process.env.PORT || 4200;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Authenticate API in nest js')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('AUTH USERS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/document', app, document);

  await app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
  });
}
bootstrap();
