import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { apiReference } from "@scalar/nestjs-api-reference";
import { Logger } from "nestjs-pino";
import { version } from "../package.json";
import { AppModule } from "./app.module";
import { ConfigurationService } from "./configuration/configuration.service";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(Logger));

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
    })
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle("ONRL API")
    .setDescription("ONRL API documentation")
    .setVersion(version)
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  app.use("/reference", apiReference({ content: swaggerDocument }));

  const configurationService = app.get(ConfigurationService);
  await app.listen(configurationService.appPort);
}

bootstrap();
