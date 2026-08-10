import { IsNumber, Max, Min } from "class-validator";

export class ConfigurationVariables {
  @IsNumber()
  @Min(0)
  @Max(65_535)
  APP_PORT!: number;
}
