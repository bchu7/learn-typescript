// ## Item 17: Avoid Numeric Index Signatures

const keys = Object.keys([1, 2, 3]);
console.log(keys, [1,2,3]['2']); // [ '0', '1', '2' ] 3

// const a = Object.keys({});

// const ar = [1,'heelo',3];
// ar.push(4);
// console.log(ar);

// type TupleA = [number, string, number];
// const tupleA: TupleA = [1,'',3]
// tupleA.push('hey');
// tupleA.push(4);
// console.log(tupleA);

function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
  if (i >= 0 && i < xs.length) {
    return xs[i];
  }
  throw new Error(`Attempt to access ${i} which is past end of array.`)
}
