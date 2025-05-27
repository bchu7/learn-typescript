type PersonX = { age: number; name: string; alive: boolean };
type Age = PersonX['age'];

type T1 = PersonX['age' | 'name'];

type T2 = PersonX[keyof PersonX];

type AliveOrName = 'alive' | 'name';
type T3 = PersonX[AliveOrName];

// ----------

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type PersonY = typeof MyArray[number];
type AgeY = typeof MyArray[number]['age'];
type AgeYY = PersonY['age'];

// only use types when indexing, meaning you can’t use a const to make a variable reference
type key = 'age';
// const key = 'age';
// type AgeZ = PersonY[key]; // invalid
type Agez = PersonY[key]