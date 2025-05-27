// import type which is an import statement which can only import types:
import { createCatName, type Cat, type Dog } from './includes/animals';

namespace Modules {
// @filename: animal.ts
// export type Cat = { breed: string; yearOfBirth: number };
// export type Dog = { breeds: string[]; yearOfBirth: number };
// export const createCatName = () => "fluffy";
 
export type Animals = Cat | Dog;
const name = createCatName();
}