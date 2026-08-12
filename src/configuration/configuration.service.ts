import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConfigurationVariables } from "./configuration.variables";

@Injectable()
export class ConfigurationService {
  constructor(
    private readonly configService: ConfigService<ConfigurationVariables, true>
  ) {}

  get appEnvironment(): string {
    return this.configService.get("NODE_ENV");
  }

  get appPort(): number {
    return this.configService.get("APP_PORT");
  }

  get databaseHost(): string {
    return this.configService.get("DATABASE_HOST");
  }

  get databaseName(): string {
    return this.configService.get("DATABASE_NAME");
  }

  get databasePassword(): string {
    return this.configService.get("DATABASE_PASSWORD");
  }

  get databasePort(): number {
    return this.configService.get("DATABASE_PORT");
  }

  get databaseUsername(): string {
    return this.configService.get("DATABASE_USERNAME");
  }

  get healthDiskThresholdPercent(): number {
    return this.configService.get("HEALTH_DISK_THRESHOLD_PERCENT", {
      infer: true,
    });
  }

  get healthMemoryHeapThresholdBytes(): number {
    return (
      this.configService.get("HEALTH_MEMORY_HEAP_THRESHOLD_MB", {
        infer: true,
      }) *
      1024 *
      1024
    );
  }

  get healthMemoryRssThresholdBytes(): number {
    return (
      this.configService.get("HEALTH_MEMORY_RSS_THRESHOLD_MB", {
        infer: true,
      }) *
      1024 *
      1024
    );
  }

  get loggerLevel(): string {
    return this.configService.get("LOGGER_LEVEL");
  }

  get redisHost(): string {
    return this.configService.get("REDIS_HOST");
  }

  get redisPort(): number {
    return this.configService.get("REDIS_PORT");
  }

  get redisPassword(): string {
    return this.configService.get("REDIS_PASSWORD");
  }

  get smtpHost(): string {
    return this.configService.get("SMTP_HOST");
  }

  get smtpPort(): number {
    return this.configService.get("SMTP_PORT");
  }

  get smtpSecure(): boolean {
    return this.configService.get("SMTP_SECURE");
  }

  get smtpUser(): string {
    return this.configService.get("SMTP_USER");
  }

  get smtpPassword(): string {
    return this.configService.get("SMTP_PASSWORD");
  }

  get smtpFrom(): string {
    return this.configService.get("SMTP_FROM");
  }
}
