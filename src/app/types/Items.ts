import * as t from "io-ts";
import { DamageCausing, EquipableItem} from "./Base";

export type ArmorTypeT = t.TypeOf<typeof ArmorType>;
export const ArmorType = t.union([
  t.literal("LIGHT"),
  t.literal("MEDIUM"),
  t.literal("HEAVY"),
  t.literal("SHIELD"),
])

export type ArmorT = t.TypeOf<typeof Armor>;
export const Armor = t.intersection([
  EquipableItem,
  t.type({
    type: ArmorType,
    baseArmorClass: t.Integer,
    strengthRequirement: t.Integer,
    givesStealthDisadvantage: t.boolean,
    itemType: t.literal("ARMOR")
  })
])

export type WeaponT = t.TypeOf<typeof Weapon>;
export const Weapon = t.intersection([
  EquipableItem,
  DamageCausing,
  t.type({
    itemType: t.literal("WEAPON")
  })
]);

