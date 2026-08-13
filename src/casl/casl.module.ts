import { Global, Module } from "@nestjs/common";
import { CaslGuard } from "./casl.guard";
import { CaslAbilityFactory } from "./casl-ability.factory";

@Global()
@Module({
  exports: [CaslAbilityFactory, CaslGuard],
  providers: [CaslAbilityFactory, CaslGuard],
})
export class CaslModule {}
