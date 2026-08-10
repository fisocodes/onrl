import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigurationService } from "./configuration.service";
import { validate } from "./configuration.validate";

@Module({
  exports: [ConfigModule],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
  ],
  providers: [ConfigurationService],
})
export class ConfigurationModule {}
