interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    return arg;
}

const myIdentity: GenericIdentityFn = identity;
console.log(myIdentity('binh'));

// same as above
interface GenericIdentityFn111<T> {
    (arg: T): T;
}

const myIdentity111: GenericIdentityFn111<string> = (arg: string): string => arg;
console.log(myIdentity111('binh111'));

//------ generic class
class Generator<T> {
    public constructor(fnAdd: (x: T, y: T) => T) {
        this.add = fnAdd;
    }
    public value: T | undefined;
    public add: ((x: T, y: T) => T) | undefined;
}

const gen = new Generator<number>((x, y) => x + y);
console.log(gen.add!(2, 3));

// gen.add = (x, y) => x + y;

const gen1 = new Generator<string>((x, y) => x + y);
console.log(gen1.add!('2+', '3'));

const gen2 = new Generator<Person>((x, y) => {
    return {
        name: `${x.name} and ${y.name}`,
        age: x.age + y.age
    };
});

const person1: Person = { name: 'Anne', age: 21 };
const person2: Person = { name: 'Bob', age: 22 };
console.log(gen2.add!(person1, person2));

type Person = {
    name: string;
    age: number;
}

// Generic Constraints

interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

class Vehicle implements Lengthwise {
    public constructor(name: string, hasWheels: boolean, length: number) {
        this._name = name;
        this._hasWheels = hasWheels;
        this.length = length;        
    }
    private _name: string;
    private _hasWheels: boolean;
    length!: number;    

    get name(): string {
        return this._name;
    }

    get hasWheels(): boolean {
        return this._hasWheels;
    }
}

const bike = new Vehicle('herenfiets', true, 2);

console.log(loggingIdentity(bike));

// Using Type Parameters in Generic Constraints

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
// getProperty(x, "y"); // invalid property

getProperty(bike, 'name');
// getProperty(bike, 'steer'); // invalid property

// Using Class Types in Generics
interface Keeper {
    keeper: BeeKeeper | ZooKeeper;
}

class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nameTag: string = "Mikle";
}
 
class AnimalX {
  numLegs: number = 4;
}
 
class Bee extends AnimalX implements Keeper {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends AnimalX {
  keeper = new ZooKeeper();
}

function createInstance<A extends AnimalX>(c: new () => A): A {
  return new c();
}
 
console.log(createInstance(Lion).keeper.nameTag);
console.log(createInstance(Bee).keeper.hasMask);

/** another way
 * type AnimalXConstructor<T> = { new (): T }; or type AnimalXConstructor<T extends AnimalX> = { new (): T };
 * function createInstance<A extends AnimalX>(c: AnimalXConstructor<A>): A {
 *   return new c();
 * }
 */
