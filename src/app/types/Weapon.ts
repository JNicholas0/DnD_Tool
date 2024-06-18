import * as t from "io-ts";
import { DamageCausing, EquipableItem } from "./Base";

export type WeaponT = t.TypeOf<typeof Weapon>;
export const Weapon = t.intersection([
  EquipableItem,
  DamageCausing,
  t.type({
    itemType: t.literal("WEAPON")
  })
]);

