let s = "hello";
console.log(typeof s);

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
type L = ReturnType<(x: unknown) => boolean>;

function f() {
  return { x: 10, y: 3 };
}
type PP = ReturnType<typeof f>;