namespace ConditionalTypes {
    interface Animal {
        live(): void;
    }
    interface Dog extends Animal {
        woof(): void;
    }

    type Example = Dog extends Animal ? number : string;
    type Example2 = RegExp extends Animal ? number : string;

    // with generics

    interface IdLabel {
        id: number /* some fields */;
    }
    interface NameLabel {
        name: string /* other fields */;
    }

    type NameOrId<T extends number | string> = T extends number
        ? IdLabel
        : NameLabel;

    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
        console.log(typeof idOrName);
        return (typeof idOrName === 'number' ? { id: idOrName } : { name: idOrName }) as NameOrId<T>
    }

    const A = createLabel('typescript');

    const a: typeof A = { name: 'hello a' };
    console.log(a);

    const b = createLabel(2.8);
    console.log(b);

    const c = createLabel(Math.random() ? "hello" : 42);
    console.log(c);

    // Conditional Type Constraints

    type MessageOf<T extends { message: unknown }> = T['message'];
    // type MessageOf<T> = T['message']; // invalid

    interface Email {
        message: string;
    }

    type EmailMessageContents = MessageOf<Email>;

}

namespace ConditionalTypesX {
    // introducing conditional type

    type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

    interface Email {
        message: string;
    }

    interface Dog {
        bark(): void;
    }

    type EmailMessageContents = MessageOf<Email>;
    type DogMessageContents = MessageOf<Dog>;

    // flatten

    type Flatten<T> = T extends unknown[] ? T[number] : T;
    type Str = Flatten<string[]>;
    type Num = Flatten<number>;
    const n: Num = 2.3;

    console.log(n);
}

namespace ConditonalTypesInfer {
    type Flatten<T> = T extends Array<infer Item> ? Item : T;
    type A = Flatten<string[]>; // string
    type B = Flatten<number[]>; // number
    type C = Flatten<unknown>;  // unkown
}

namespace FunctionReturnTypes {
    type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
        ? Return
        : never;

    type Num = GetReturnType<() => number>;
    type Str = GetReturnType<(x: string) => string>;
    type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

    // overloaded
    declare function stringOrNum(x: string): number;
    declare function stringOrNum(x: number): string;
    declare function stringOrNum(x: string | number): string | number;
    type T1 = ReturnType<typeof stringOrNum>;

}

namespace DistributiveConditionalTypes {
    type ToArray<Type> = Type extends unknown ? Type[] : never;
    type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
    const strNumArray1: StrArrOrNumArr = ['hello', 'you'];
    const strNumArray2: StrArrOrNumArr = [1, 2];

    // Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the extends keyword with square brackets.

    type ToArrayNonDist<Type> = [Type] extends [unknown] ? Type[] : never;
    // 'ArrOfStrOrNum' is no longer a union.
    type ArrOfStrOrNum = ToArrayNonDist<string | number>; // (string | number)[]
    const aaa: ArrOfStrOrNum = ['hello', 'you'];
    const bbb: ArrOfStrOrNum = [1, 2];
}