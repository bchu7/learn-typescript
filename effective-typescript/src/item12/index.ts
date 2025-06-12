// ## Item 12: Apply Types to Entire Function Expressions When Possible

// namespace Item12 {
    type DiceRollFn = (sides: number) => number;
    const rollDice: DiceRollFn = sides => { return sides; };
    const aa = rollDice.call(rollDice, 5);
    console.log(`${aa}`);   // 5

    // function add(a: number, b: number) { return a + b; }
    // consoliate the repated function signatures with a single type: BinaryFn
    export type BinaryFn = (a: number, b: number) => number;
    const add: BinaryFn = (a, b) => a + b;
    const sub: BinaryFn = (a, b) => a - b;
    const mul: BinaryFn = (a, b) => a * b;
    const div: BinaryFn = (a, b) => a / b;

    // -----
    declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    type FetchFn = typeof fetch;

    // So you can write checkedFetch like this:
    async function checkedFetch(input: RequestInfo, init?: RequestInit) {
        const response = await fetch(input, init);
        if (!response.ok) {
            // An exception becomes a rejected Promise in an async function.
            throw new Error(`Request failed: ${response.status}`);
        }
        return response;
    }

    // the above works, but it can be written more concisely:
    const checkedFetchConcisely: typeof fetch = async (input, init) => {
        const response = await fetch(input, init);
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        return response;
    }

    // Using Parameters utility to use parameter types of another function but change the return type
    async function fetchANumber(...args: Parameters<typeof fetch>): Promise<number> {
        const response = await checkedFetch(...args);
        const num = Number(await response.text());
        if (isNaN(num)) {
            throw new Error(`Response was not a number.`);
        }
        return num;
    }

    // exercise: type FetchANumber
    type FetchType = (...args: Parameters<typeof fetch>) => Promise<number>;
    const fetchType: FetchType = async (input, init?) => {
        const response = await checkedFetch(input, init);
        const num = Number(await response.text());
        if (isNaN(num)) {
            throw new Error(`Response was not a number.`);
        }
        return num;
    }

    // exercise: extends existing type, add parameter 'age: number'
    type FetchNew = (...args: [...Parameters<typeof fetch>, age?: number]) => Promise<number>;
    const fetchNew: FetchNew = async (input, init?, age?) => {
        // Pass only `input` and `init` to `checkedFetch`
        const response = await checkedFetch(input, init);
        const num = Number(await response.text());
        if (isNaN(num)) {
            throw new Error(`Response was not a number.`);
        }
        console.log(`age: ${age}`);
        return num;
    };

    // exercise: FetchNew, but return type of FetchFn
    type FetchNewFn = (...args: Parameters<FetchNew>) => ReturnType<FetchFn>;
    const fetchNewFn: FetchNewFn = async(input, init?, age?) => {
        return await fetch(input, init);
    }

    // exercise: use interface
    interface FetchInterfaceFn { 
        (...args: Parameters<FetchFn>): ReturnType<FetchFn>;
    }
    const fetchInterfaceFn: FetchInterfaceFn = async(input, init?) => {
        console.log(`fetchInterfaceFn: ${input}, ${init}`);
        return Promise.resolve(new Response());
        // return await fetch(input, init);
    }
// }