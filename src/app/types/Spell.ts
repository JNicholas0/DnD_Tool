import * as t from "io-ts";
import { SavingThrow } from "./SavingThrow";
import { Damage } from "./Damage";
import { DamageCausing, Describable } from "./Base";

export type SpellT = t.TypeOf<typeof Spell>;
export const Spell = t.intersection([
    Describable,
    DamageCausing,
    t.type({
        minimumLevel: t.Integer,
        castingTimeSeconds: t.number,
        durationSeconds: t.number,
        requiresConcentration: t.boolean,
        requiresVerbalComponent: t.boolean,
        requiresSomaticComponent: t.boolean,
        requiresMaterialComponent: t.boolean
    })
])
