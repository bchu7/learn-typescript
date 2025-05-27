namespace UtilityTypes_Awaited {
    // Awaited<Type> is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.
    type A = Awaited<Promise<string>>;
    type B = Awaited<Promise<Promise<number>>>;
    type C = Awaited<boolean | Promise<number>>;

}

namespace UtilityTypes_Partial {

    // Partial<Type> Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
    interface Todo {
        title: string;
        description: string;
    }

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
        return { ...todo, ...fieldsToUpdate };
    }

    function updateTodo1(todo: Todo): Todo {
        return { ...todo };
    }

    const todo1 = {
        title: "organize desk",
        description: "clear clutter",
    };

    const todo22 = updateTodo(todo1, {
        description: "throw out trash",
    });

    const todo33 = updateTodo1(todo1);

    console.log(todo22);
    console.log(todo33);
}

namespace UtilityTypes_Required {
    // Required<Type> Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
    interface Props {
        a?: number;
        b?: string;
    }

    const obj: Props = { a: 5 };

    // const obj2: Required<Props> = { a: 5 };
    // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

}

namespace UtilityTypes_Readonly {
    // Readonly<Type> Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned
    interface Todo {
        title: string;
    }

    const todo: Readonly<Todo> = {
        title: "Delete inactive users",
    };

    // todo.title = "Hello";
    // Cannot assign to 'title' because it is a read - only property.

    function freeze<Type>(obj: Type): Readonly<Type> {
        return obj;
    }

    const todo2: Todo = { title: '' };
    const frozenTodo = freeze(todo2);
    // frozenTodo.title = 'cannot update'; // Cannot assign to 'title' because it is a read-only property.
}

namespace UtilityTypes_Record {
    // Record<Keys, Type> Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

    type CatName = "miffy" | "boris" | "mordred";

    interface CatInfo {
        age: number;
        breed: string;
    }

    const cats: Record<CatName, CatInfo> = {
        miffy: { age: 10, breed: "Persian" },
        boris: { age: 5, breed: "Maine Coon" },
        mordred: { age: 16, breed: "British Shorthair" },
    };

    cats.boris;

    // const cats: Record<CatName, CatInfo>
}

namespace UtilityTypes_Pick {
    // Pick<Type, Keys> Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview = Pick<Todo, "title" | "completed">;

    const todo: TodoPreview = {
        title: "Clean room",
        completed: false,
    };

    todo;

    // const todo: TodoPreview
}

namespace UtilityTypes_Omit {
    // Omit<Type, Keys> Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.

    interface Todo {
        title: string;
        description: string;
        completed: boolean;
        createdAt: number;
    }

    type TodoPreview = Omit<Todo, "description">;

    const todo: TodoPreview = {
        title: "Clean room",
        completed: false,
        createdAt: 1615544252770,
    };

    todo;

    // const todo: TodoPreview

    type TodoInfo = Omit<Todo, "completed" | "createdAt">;

    const todoInfo: TodoInfo = {
        title: "Pick up kids",
        description: "Kindergarten closes at 5pm",
    };

    todoInfo;

    // const todoInfo: TodoInfo
}

namespace UtilityTypes_Exclude {
    // Exclude<UnionType, ExcludedMembers> Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

    type T0 = Exclude<"a" | "b" | "c", "a">;

    // type T0 = "b" | "c"
    type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

    // type T1 = "c"
    type T2 = Exclude<string | number | (() => void), Function>;

    // type T2 = string | number

    type Shape =
        | { kind: "circle"; radius: number }
        | { kind: "square"; x: number }
        | { kind: "triangle"; x: number; y: number };

    type T3 = Exclude<Shape, { kind: "circle" }>

    // type T3 = {
    //     kind: "square";
    //     x: number;
    // } | {
    //     kind: "triangle";
    //     x: number;
    //     y: number;
    // }
}

namespace UtilityTypes_Extract {
    // Extract<Type, Union> Constructs a type by extracting from Type all union members that are assignable to Union.

    type T0 = Extract<"a" | "b" | "c", "a" | "f">;

    // type T0 = "a"
    type T1 = Extract<string | number | (() => void), Function>;

    // type T1 = () => void

    type Shape =
        | { kind: "circle"; radius: number }
        | { kind: "square"; x: number }
        | { kind: "triangle"; x: number; y: number };

    type T2 = Extract<Shape, { kind: "circle" }>

    // type T2 = {
    //     kind: "circle";
    //     radius: number;
    // }
}

namespace UtilityTypes_NonNullable {
    // NonNullable<Type> Constructs a type by excluding null and undefined from Type.

    type T0 = NonNullable<string | number | undefined>;

    // type T0 = string | number
    type T1 = NonNullable<string[] | null | undefined>;

    // type T1 = string[]

    type A = null | number | undefined;

    type B = NonNullable<A>; // number
}

namespace UtilityTypes_Parameters {
    // Parameters<Type> Constructs a tuple type from the types used in the parameters of a function type Type.

    declare function f1(arg: { a: number; b: string }): void;

    type T0 = Parameters<() => string>; // type T0 = []
    type T1 = Parameters<(s: string) => void>; // type T1 = [s: string]
    type T3 = Parameters<typeof f1>; // type T3 = [arg: { a: number; b: string; }]
    type T4 = Parameters<any>; // type T4 = unknown[]
    type T5 = Parameters<never>; // type T5 = never
    // type T6 = Parameters<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'.

}

namespace UtilityTypes_ConstructorParameters {
    // ConstructorParameters<Type> Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).

    type T0 = ConstructorParameters<ErrorConstructor>; // type T0 = [message?: string | undefined, options?: ErrorOptions | undefined]
    type T1 = ConstructorParameters<FunctionConstructor>; // type T1 = string[]
    class C {
        constructor(a: number, b: string) { }
    }
    type T3 = ConstructorParameters<typeof C>; // type T3 = [a: number, b: string]

}

namespace UtilityTypes_ReturnType {
    // ReturnType<Type> Constructs a type consisting of the return type of function Type

    declare function f1(): { a: number; b: string };
    type T0 = ReturnType<() => string>; // type T0 = string
    type T1 = ReturnType<(s: string) => void>; // type T1 = void
    type T2 = ReturnType<<T>() => T>; // type T2 = unknown
    type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // T3 = number[]
    type T4 = ReturnType<typeof f1>; // T4 = { a: number; b: string }

}

namespace UtilityTypes_InstanceType {
    // InstanceType<Type> Constructs a type consisting of the instance type of a constructor function in Type.

    class C {
        x = 0;
        y = 0;
    }
    type T0 = InstanceType<typeof C>;
}

namespace UtilityTypes_ThisParameterType{
    // ThisParameterType<Type> Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.
    
    function toHex(this: Number) {
        return this.toString(16);
    }
    
    function numberToString(n: ThisParameterType<typeof toHex>) {
        return toHex.apply(n);
    }
}

namespace UtilityTypes_OmitThisParameter{
    function toHex(this: Number) {
        return this.toString(16);
    }
    
    const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
    
    console.log(fiveToHex());
}

