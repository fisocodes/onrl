import { Type } from "class-transformer";
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from "class-validator";

export enum AppEnvironment {
  Development = "development",
  Production = "production",
}

export class ConfigurationVariables {
  @IsEnum(AppEnvironment)
  NODE_ENV!: AppEnvironment;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(65_535)
  APP_PORT!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(65_535)
  DATABASE_PORT!: number;

  @IsString()
  @IsNotEmpty()
  DATABASE_HOST!: string;

  @IsString()
  @IsNotEmpty()
  DATABASE_NAME!: string;

  @IsString()
  @IsNotEmpty()
  DATABASE_USERNAME!: string;

  @IsString()
  @IsNotEmpty()
  DATABASE_PASSWORD!: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  HEALTH_MEMORY_HEAP_THRESHOLD_MB!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  HEALTH_MEMORY_RSS_THRESHOLD_MB!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(1)
  HEALTH_DISK_THRESHOLD_PERCENT!: number;

  @IsString()
  @IsIn(["fatal", "error", "warn", "info", "debug", "trace"])
  LOGGER_LEVEL!: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(65_535)
  REDIS_PORT!: number;

  @IsString()
  @IsNotEmpty()
  REDIS_HOST!: string;

  @IsString()
  @IsNotEmpty()
  REDIS_PASSWORD!: string;

  @IsString()
  @IsNotEmpty()
  SMTP_HOST!: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(65_535)
  SMTP_PORT!: number;

  @Type(() => Boolean)
  @IsBoolean()
  SMTP_SECURE!: boolean;

  @IsString()
  @IsNotEmpty()
  SMTP_USER!: string;

  @IsString()
  @IsNotEmpty()
  SMTP_PASSWORD!: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  SMTP_FROM!: string;
}
