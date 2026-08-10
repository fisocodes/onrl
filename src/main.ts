import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Logger } from "nestjs-pino";
import { AppModule } from "./app.module";
import { ConfigurationService } from "./configuration/configuration.service";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });
  const configurationService = app.get(ConfigurationService);
  app.useLogger(app.get(Logger));
  await app.listen(configurationService.appPort);
}
bootstrap();
