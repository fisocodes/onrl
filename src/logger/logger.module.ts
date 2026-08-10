import { Module } from "@nestjs/common";
import { LoggerModule as PinoLoggerModule } from "nestjs-pino";
import { ConfigurationModule } from "../configuration/configuration.module";
import { ConfigurationService } from "../configuration/configuration.service";

@Module({
  exports: [PinoLoggerModule],
  imports: [
    PinoLoggerModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (configurationService: ConfigurationService) => ({
        pinoHttp: {
          level: configurationService.loggerLevel,
          redact: ["req.headers.authorization", "req.headers.cookie"],
          transport:
            configurationService.appEnvironment === "production"
              ? undefined
              : {
                  options: {
                    colorize: true,
                    colorizedObjects: true,
                    translateTime: "HH:MM:ss",
                  },
                  target: "pino-pretty",
                },
        },
      }),
    }),
  ],
})
export class LoggerModule {}
