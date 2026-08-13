import { SetMetadata } from "@nestjs/common";
import { CaslAction } from "./interfaces/casl-action.type";
import { CaslSubject } from "./interfaces/casl-subject.type";

export interface CaslRule {
  action: CaslAction;
  subject: CaslSubject;
}

export const CASL_CHECK_KEY = "casl_check";

export const CaslCheck = (action: CaslAction, subject: CaslSubject) =>
  SetMetadata(CASL_CHECK_KEY, { action, subject });
