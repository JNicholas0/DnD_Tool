import * as t from "io-ts";

export type StatTypeT = t.TypeOf<typeof StatType>;
export const StatType = t.union([
  t.literal("STR"),
  t.literal("DEX"),
  t.literal("CON"),
  t.literal("INT"),
  t.literal("WIS"),
  t.literal("CHA"),
]);

export type StatsT = t.TypeOf<typeof StatType>;
export const Stats = t.type({
  strength: t.number,
  dexterity: t.number,
  constitution: t.number,
  intelligence: t.number,
  wisdom: t.number,
  charisma: t.number
});
