type PointX = { x: number; y: number };
type P = keyof PointX;
const xx: P = 'x';

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
const aa: A = 3;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
const mm: M = 'm123';