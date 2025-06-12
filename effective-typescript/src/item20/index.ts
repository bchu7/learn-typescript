// ## Item 20: Understand How a Variable Gets Its Type

const arr: readonly number[] = [1, 2, 3];
function tuple<T extends unknown[]>(...elements: T) { return elements; }
// type TupleElement = <T extends unknown[]>(...elements: T) => readonly [...T];
type TupleElement = <T extends unknown[]>(...elements: T) => T;
const createTuple: TupleElement = (...elements) => { return elements; }

const a1 = tuple(1, 'hallo', 3);
const a2 = createTuple(1, 2, 3);
const a3 = createTuple(1, 'hello', 3);
console.log(a1, a2, a3);

//--------------
type Point = [number, number];
const capitals1 = { ny: [-73.7562, 42.6526], ca: [-121.4944, 38.5816] };
//    ^? const capitals1: { ny: number[]; ca: number[]; }

const capitals2 = {
    ny: [-73.7562, 42.6526], ca: [-121.4944, 38.5816]
} satisfies Record<string, Point>;
capitals2
// ^? const capitals2: { ny: [number, number]; ca: [number, number]; }

console.log(typeof capitals1, typeof capitals2);

const capitals3: Record<string, Point> = capitals2;
