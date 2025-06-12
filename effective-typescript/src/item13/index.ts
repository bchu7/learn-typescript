// ## Item 13: Know the Differences Between `type` and `interface`

namespace Item13 {

    /*
    For new code where you need to pick a style, the general rule of thumb is to use interface where possible,
    using type either where it’s required (e.g., union types) or has a cleaner syntax (e.g., function types).
    */

    type TState = {
        name: string;
        capital: string;
    };

    interface IState {
        name: string;
        capital: string;
    }

    //
    // Similarities:
    //

    // Object literal may only specify known properties, and 'population' does not exist in type 'TState'.ts(2353)
    // const tstate: TState = {name: 'NB', capital: 'Den Bosch', population: 123}
    // const istate: IState = {name: 'NB', capital: 'Den Bosch', population: 3}

    // You can use an index signature with both interface and type:
    type TDict = {
        [key: string]: string
    };
    interface IDict {
        [key: string]: string;
    };

    // You can also define function types with either:
    type TFn = (x: number) => string; // <-- preferred form alias for function
    interface IFn {
        (x: number): string;
    }
    type TFnAlt = {
        (x: number): string;
    };
    const tFn: TFn = (x) => '' + x;
    const iFn: IFn = (x) => '' + x;
    const tFnAlt: TFnAlt = (x) => '' + x;

    // exercise: with generic
    type TFnGeneric<T> = (x: T) => string;
    const tfGeneric: TFnGeneric<number> = (x) => '' + x;
    const tfGeneric1: TFnGeneric<string> = (x) => x;

    // an interface can extend a type and a type can extend an inteface
    interface IStateWithPop extends TState {
        // only if this TState can also be defined as interface, 
        // so, it is not posible to extend type e.g. union type
        population: number;
    }
    type TSateWithPop = IState & {
        population: number;
    };

    // a class can implement interface and a simple type

    // both type and interface can be recursive Item 57???

    //
    // Differences
    //

    // there are union types, but no union interfaces

    // interfaces can be augmented?
    // 'declaration merging' Item 71

    interface IState {
        name: string;
        capital: string;
    }
    interface IState {
        population: number;
    }
    const wyoming: IState = {
        name: 'Wyoming',
        capital: 'Cheyenne',
        population: 578_000
    }; // OK
    console.log(`poplulation: ${wyoming.population}`);
    console.log(`poplulation: ${typeof 578_0002}`);
    console.log(`keys: ${Object.keys(wyoming)}`);
    type State = (IState[keyof IState]);

    const logProperties = (obj: IState) => {
        for (const key in obj) {
            console.log(`${key}: ${obj[key as keyof IState]}`);
        }
    };

    // Example usage
    logProperties(wyoming);


}
