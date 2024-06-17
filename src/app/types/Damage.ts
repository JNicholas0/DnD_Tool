import * as t from "io-ts";
import { Die } from "./Dice";

/**
 * All of the types of attack damage
 */
export type DamageTypeT = t.TypeOf<typeof DamageType>;
export const DamageType = t.union([
    t.literal("ACID"),
    t.literal("BLUDGEONING"),
    t.literal("COLD"),
    t.literal("FIRE"),
    t.literal("FORCE"),
    t.literal("LIGHTNING"),
    t.literal("NECROTIC"),
    t.literal("PIERCING"),
    t.literal("POISON"),
    t.literal("PSYCHIC"),
    t.literal("RADIANT"),
    t.literal("SLASHING"),
    t.literal("THUNDER")
])

/**
 * A die roll that does damage
 */
export type DamageT = t.TypeOf<typeof Damage>;
export const Damage = t.type({
    die: Die,
    type: DamageType
})

