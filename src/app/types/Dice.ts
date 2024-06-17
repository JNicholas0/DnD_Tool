import * as t from "io-ts";
import { singleOrIterableToIterable } from "../util/SingleOrIterableToIterable";

/**
 * A die, represented by the number of sides.
 */
export type DieT = t.TypeOf<typeof Die>;
export const Die = t.type({
  numberOfSides: t.Integer,
});

/**
 * The result of the roll of a particular die
 */
export type DieRollT = t.TypeOf<typeof DieRoll>;
export const DieRoll = t.type({
  result: t.Integer,
  die: Die,
});

/**
 * Roll all dice in a collection.
 * @param dice A iterable collection of dice
 * @returns The result of each roll (in the same order the dice were specified)
 */
export function rollDie(dice: Readonly<DieT | Iterable<DieT>>): DieRollT[] {
  let diceIterable = singleOrIterableToIterable(dice);
  const rolls: DieRollT[] = [];
  for (const die of diceIterable) {
    rolls.push({
      result: Math.floor(Math.random() * die.numberOfSides) + 1,
      die: die,
    });
  }
  return rolls;
}
