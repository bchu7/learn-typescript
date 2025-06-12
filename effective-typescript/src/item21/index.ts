// ## Item 21: Create Objects All at Once

declare let hasMiddle: boolean;
hasMiddle = true;
const firstLast = { first: 'Harry', last: 'Truman' };
const president = { ...firstLast, ...(hasMiddle ? { middle: 'S' } : {}) };

declare let hasDates: boolean;
const nameTitle = {name: 'Khufu', title: 'Pharaoh'};
const pharaoh = { ...nameTitle, ...(hasDates && {start: -2589, end: -2566})};

const a = { a1: 'hello1', a2: 'hello2' };
const b = { ...a, ...{ b1: 1, b2: true } };
const c = { ...b, c1: 'this is c1', c2: 123 }
console.log(c);