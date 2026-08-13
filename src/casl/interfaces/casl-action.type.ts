export const CASL_ACTIONS = [
  "manage",
  "create",
  "read",
  "update",
  "delete",
] as const;
export type CaslAction = (typeof CASL_ACTIONS)[number];
