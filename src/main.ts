import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
    const options = new DocumentBuilder()
        .setTitle('肥飝猫 API')
        .setDescription('The blog API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/apidoc', app, document);
    app.use('/apijson', (req, res, next) => res.send(document));

    await app.listen(5689);
}
bootstrap();
