import * as t from "io-ts";
import { SavingThrow } from "./SavingThrow";
import { Damage } from "./Damage";

/**
 * Anything that has a name and description.
 */
export type DescribableT = t.TypeOf<typeof Describable>;
export const Describable = t.type({
  name: t.string,
  description: t.string,
});

/**
 * Anything that can be carried in the inventory.
 * All inventory items are describable.
 * Includes weapons, armor and other items. 
 */
export type InventoryItemT = t.TypeOf<typeof InventoryItem>;
export const InventoryItem = t.intersection([
  Describable,
  t.type({
    weight: t.number,
    valueCopper: t.Integer,
  }),
]);

/**
 * Anything that causes damage (spells and weapons)
 */
export type DamagingCausingT = t.TypeOf<typeof DamageCausing>;
export const DamageCausing = t.intersection([
  t.type({
    damage: t.array(Damage),
    range: t.number,
  }),
  t.partial({
    savingThrow: SavingThrow,
  }),
]);
