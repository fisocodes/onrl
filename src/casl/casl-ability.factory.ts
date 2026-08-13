import {
  AbilityBuilder,
  createMongoAbility,
  MongoAbility,
} from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { CaslAction } from "./interfaces/casl-action.type";
import { CaslSubject } from "./interfaces/casl-subject.type";
import { CaslUser } from "./interfaces/casl-user.interface";

export type CaslAbility = MongoAbility<[CaslAction, CaslSubject]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: CaslUser): CaslAbility {
    const { can, cannot, build } = new AbilityBuilder<CaslAbility>(
      createMongoAbility
    );

    const sortedRoles = user.roles.toSorted((a, b) => a.priority - b.priority);

    for (const role of sortedRoles) {
      for (const permission of role.permissions) {
        const method = permission.inverted ? cannot : can;
        method(permission.action, permission.subject, permission.fields);
      }
    }

    return build();
  }
}
