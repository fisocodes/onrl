import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigurationService } from "../configuration/configuration.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigurationService],
      useFactory: (configurationService: ConfigurationService) => ({
        autoLoadEntities: true,
        database: configurationService.databaseName,
        host: configurationService.databaseHost,
        password: configurationService.databasePassword,
        port: configurationService.databasePort,
        type: "postgres",
        username: configurationService.databaseUsername,
      }),
    }),
  ],
})
export class DatabaseModule {}
