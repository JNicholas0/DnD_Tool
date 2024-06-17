import * as t from "io-ts";
import { Die } from "./Dice.ts";
import { StatType } from "./Stats.ts";

export type SavingThrowT = t.TypeOf<typeof SavingThrow>;
export const SavingThrow = t.type({
    minimumRoll: t.Integer,
    statType: StatType,
    die: Die
})