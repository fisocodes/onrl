import { Module } from "@nestjs/common";
import { ConfigurationModule } from "./configuration/configuration.module";
import { DatabaseModule } from "./database/database.module";
import { LoggerModule } from "./logger/logger.module";

@Module({
  imports: [ConfigurationModule, LoggerModule, DatabaseModule],
})
export class AppModule {}
