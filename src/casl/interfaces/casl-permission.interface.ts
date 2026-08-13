import { CaslAction } from "./casl-action.type";
import { CaslSubject } from "./casl-subject.type";

export interface CaslPermission {
  action: CaslAction;
  fields?: string[];
  inverted?: boolean;
  subject: CaslSubject;
}
