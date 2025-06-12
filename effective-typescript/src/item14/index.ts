// ## Item 14: Use `readonly` to Avoid Errors Associated with Mutation

import { ReadonlyDeep } from 'type-fest';
import { DeepReadonly } from 'ts-essentials';

const a = { a: 'aa', b: 'bb' };
a.a = 'bb' // aa is assignable
console.log(a);

interface Point {
    x: number,
    y: number,
}
const point: Point = { x: 1, y: 2 };
point.x = 3; // point is mutable

type PointX = Readonly<Point>; // shallow
const pointX: PointX = { x: 1, y: 2 };
// pointX.x = 3; // pointX is not mutable

const mutableNumbers: number[] = [1, 2];
mutableNumbers.push(1); // mutableNumbers is mutable
mutableNumbers.pop();

type MutableStrings = Array<string>;
const mutableStrings: MutableStrings = ['a', 'b', 'c'];
mutableStrings.pop();   // mutableString is mutable
mutableStrings.push('c');

const arNotMutable: readonly number[] = [1, 2, 3];
// arNotMutable.pop(); arNotMutable is not mutable

type ReadonlyNumbers = Readonly<number[]>;
const readonlyNumbers: ReadonlyNumbers = [1, 2, 3];
// readonlyNumbers.pop() there is no function push(), pop(), shift()

type ReadonlyStrings = ReadonlyArray<string>;
const readonlyStrings: ReadonlyStrings = ['a', 'b', 'c'];
// readonlyStrings.pop() there is no push or pop functions

type Config = {
  app: {
    name: string;
    settings: {
      darkMode: boolean;
      features: string[];
    };
  };
};

// use type-fest.ReadonlyDeep for deep nesting properties
const configReadonlyDeep: ReadonlyDeep<Config> = {
  app: {
    name: "MyApp",
    settings: {
      darkMode: true,
      features: ["chat", "login"]
    }
  }
};
// configReadonlyDeep.app.settings.darkMode = false; // not mutable

// use ts-essential.DeepReadonly for deep nesting properties
const configDeepReadonly: DeepReadonly<Config> = {
  app: {
    name: "MyApp",
    settings: {
      darkMode: true,
      features: ["chat", "login"]
    }
  }
};
// configDeepReadonly.app.settings.darkMode = false; // not mutable

// ---------
// you can assign a mutable array to a readonly array, but not vice versa:
const aa: number[] = [1, 2, 3];
const bb: readonly number[] = aa;
// const cc: number[] = bb; // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.ts(4104)



