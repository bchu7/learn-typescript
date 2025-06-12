// ## Item 27: Use async Functions Instead of Callbacks to Improve Type Flow

namespace Item28 {
    const arr = [1, 2, 3];
    const [a1, a2, a3, a4] = arr;
    console.log(a1, a2, a3, a4); // 1 2 3 undefined

    // -----------------
    function timeout(timeoutMs: number): Promise<never> {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('timeout'), timeoutMs);
        });
    }
    async function fetchWithTimeout(url: string, timeoutMs: number) {
        return Promise.race([fetch(url), timeout(timeoutMs)]);
    }

    // --------------------

    // async functions always return Promises.
    async function getNumber() { return 42; }
    //             ^? function getNumber(): Promise<number>
    const getNumber1 = async () => 42;
    //    ^? const getNumber: () => Promise<number>

    //The raw Promise equivalent is:
    const getNumberRaw = () => Promise.resolve(42);
    //    ^? const getNumber: () => Promise<number>

}
