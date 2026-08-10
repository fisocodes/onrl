import { Type } from "class-transformer";
import {
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

  @IsString()
  @IsIn(["fatal", "error", "warn", "info", "debug", "trace"])
  LOGGER_LEVEL!: string;
}
