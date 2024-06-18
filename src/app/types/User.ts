import * as t from "io-ts";
import { CampaignT } from "./Campaign"

export type UserRoleT = t.TypeOf<typeof UserRole>;
export const UserRole = t.union([
  t.literal("PLAYER"),
  t.literal("DUNGEON_MASTER"),
]);

export type UserT = t.TypeOf<typeof User>;
export const User = t.type({
  name: t.string
});

export function IsDmCheck(signedInUser: UserT, campaign: CampaignT) {
  return (campaign.dmUser == signedInUser)  // replace with ID instead of UserT == UserT
}