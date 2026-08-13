import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { CaslAbilityFactory } from "./casl-ability.factory";
import { CASL_CHECK_KEY, CaslRule } from "./casl-check.decorator";
import { CaslUser } from "./interfaces/casl-user.interface";

@Injectable()
export class CaslGuard implements CanActivate {
  constructor(
    private readonly _reflector: Reflector,
    private readonly _caslAbilityFactory: CaslAbilityFactory
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const caslRule = this._reflector.get<CaslRule>(
      CASL_CHECK_KEY,
      context.getHandler()
    );

    if (!caslRule) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: CaslUser | undefined = request.user;

    if (!user) {
      throw new ForbiddenException();
    }

    const { cannot } = this._caslAbilityFactory.createForUser(user);

    if (cannot(caslRule.action, caslRule.subject)) {
      throw new ForbiddenException();
    }

    return true;
  }
}
