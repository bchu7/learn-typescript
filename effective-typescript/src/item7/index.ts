namespace Item7 {
  type A = 'A';
  type B = 'B';
  type Twelve = 12;
  type AB = 'A' | 'B';

  // To form types with two or three values, you can union literal types:
  type AorB = A | B;
  type AneverB = A & B; // never
  type AandAB = A & AB; // 'A'
  type AB12 = 'A' | 'B' | 12;

  interface Q { id: string };
  interface W { num: number };
  interface E extends Q { };

  const union: E | W = { id: '' };
  const intersection: E & W = { id: '', num: 1 };

  type QandW = Q & W;
  const qandw = { id: '' }

  // ------------------------------
  interface Person {
    name: string;
  }
  interface Lifespan {
    birth: Date;
    death?: Date;
  }

  // On first glance, the Person and Lifespan interfaces have no properties in common, so you might expect it to be the empty set (i.e., the never type).
  // But type operations apply to the sets of values (the domain of the type), not to the properties in the interface.
  type PersonSpan = Person & Lifespan;

  const ps: PersonSpan = { name: 'pietje', birth: new Date() }

  interface PersonSpan1 extends Person {
    birth: Date,
    death?: Date,
  }

  const ps1: PersonSpan1 = { name: 'Anne', birth: new Date() }

  // Super Simple Analogy
  type AA = { a: number }
  type BB = { b: number }
  type C = AA & BB;

  // ------------------------------

  // unknown (top type) <--> never (bottom type)

  // Exclude from T those types that are assignable to U
  type NonZeroNums = Exclude<number, 0>;
  type T = Exclude<string | Date, string | number>;
  const t: T = new Date();

}