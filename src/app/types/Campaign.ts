import * as t from "io-ts";

export type CampaignT = t.TypeOf<typeof Campaign>
export const Campaign = t.type({
    name: t.string
})