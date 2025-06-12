namespace Item8 {

    interface Person {
        first: string;
        last: string;
        age: number;
    }
    const jane: Person = { first: 'Jane', last: 'Jacobs', age: 18 };

    function email(to: Person, subject: string, body: string): Response {
        return {} as Response;
    }

    type T1 = typeof jane;  // type Person
    type T2 = typeof email; // type Response
    const v1 = typeof jane; // Value is "object"
    const v2 = typeof email;// Value is "function"

    // In a value context, typeof is JavaScript’s runtime typeof operator.
    // It returns a string containing the runtime type of the symbol. This is not the same as the TypeScript type!
    // JavaScript’s typeof operator only has eight possible return values: "string", "number", "boolean", "undefined", "object", "function", "symbol", and "bigint".

    type First = Person['first']; // string
    type FirstLast = Person['first' | 'age']; // string | number
    const first = jane.first; // string

    type Tuple = [number, string, Date, boolean];
    type TupleEl = Tuple[number];

    // Some constructs, such as class or enum, introduce both a type and a value.
    class MyClass {
        name?: string;
        age?: number;
    }
    
    enum Category {        
        Red,
        White,
        Blue,
    }
}