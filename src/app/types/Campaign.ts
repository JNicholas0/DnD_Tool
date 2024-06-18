import * as t from "io-ts";
import { User } from "./User";

export type CampaignT = t.TypeOf<typeof Campaign>
export const Campaign = t.type({
    name: t.string,
    dmUser: User // replace with ID
})