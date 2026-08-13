import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { CaslModule } from "./casl/casl.module";
import { AllExceptionsFilter } from "./common/filters/all-exceptions.filter";
import { ConfigurationModule } from "./configuration/configuration.module";
import { DatabaseModule } from "./database/database.module";
import { HealthModule } from "./health/health.module";
import { LoggerModule } from "./logger/logger.module";
import { QueueModule } from "./queue/queue.module";

@Module({
  imports: [
    ConfigurationModule,
    LoggerModule,
    HealthModule,
    DatabaseModule,
    QueueModule,
    CaslModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
