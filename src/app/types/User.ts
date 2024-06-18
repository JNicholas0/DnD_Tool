import * as t from "io-ts";

export type UserRoleT = t.TypeOf<typeof UserRole>;
export const UserRole = t.union([
  t.literal("PLAYER"),
  t.literal("DUNGEON_MASTER"),
]);

export type UserT = t.TypeOf<typeof User>;
export const User = t.type({});
