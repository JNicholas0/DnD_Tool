import * as t from "io-ts";
import { DamageCausing, InventoryItem } from "./Base.ts";

export type WeaponT = t.TypeOf<typeof Weapon>;
export const Weapon = t.intersection([
  InventoryItem,
  DamageCausing
]);

