// ## Item 28: Use Classes and Currying to Create New Inference Sites

namespace Item28 {

    export interface Seed {
        id: string;
        name: string;
        color: string;
        isEdible: boolean;
    }

    export interface SeedAPI {
        '/seeds': Seed[];
        '/seed/apple': Seed;
        '/seed/strawberry': Seed;
        // ...
    }

    // Example Seed objects
    const appleSeed: Seed = {
        id: 'apple-001',
        name: 'Apple Seed',
        color: 'Brown',
        isEdible: false,
    };

    const strawberrySeed: Seed = {
        id: 'strawberry-001',
        name: 'Strawberry Seed',
        color: 'Yellowish-White',
        isEdible: true,
    };

    // Create an object of SeedAPI
    const seedApiInstance: SeedAPI = {
        '/seeds': [appleSeed, strawberrySeed],
        '/seed/apple': appleSeed,
        '/seed/strawberry': strawberrySeed,
        // You can add more entries here as needed
    };

    console.log(seedApiInstance['/seeds'][0]);

    // --------------------
    // declare function fetchAPI<API, Path extends keyof API>(path: Path): Promise<API[Path]>;
    async function fetchAPI<SeedAPI, Path extends keyof SeedAPI>(path: Path, seedAPI: SeedAPI): Promise<SeedAPI[Path]> {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        return Promise.resolve(seedAPI[path]);
    }

    // Correct usage:
    async function correct(): Promise<void> {
        const berry = await fetchAPI<SeedAPI, '/seed/strawberry'>('/seed/strawberry', seedApiInstance); // OK, returns Seed
    }

    // use class ------------------
    declare class ApiFetcher<SeedAPI> {
        public fetch<Path extends keyof SeedAPI>(path: Path): Promise<SeedAPI[Path]>;
    }

    async function corectB() {
        const fetcher = new ApiFetcher<SeedAPI>();
        const berry = await fetcher.fetch('/seed/strawberry');
    }

    // use Currying: a function that returns another function ----------------------------
    declare function getDate(mon: string, day: number): Date;
    getDate('dec', 25);

    // you could write a function that returns another function:
    declare function getDate1(mon: string): (day: number) => Date;
    getDate1('dec')(25); // 25 parameter van DateFn;

    type DateFn = (day: number) => Date;
    // declare function getDateFn(mon: string): DateFn;
    function getDateFn(mon: string): DateFn {
        return (day: number): Date => {
            // Simple month mapping (case-insensitive, first 3 letters)
            // JavaScript months are 0-indexed (January=0, December=11)
            const monthStr = mon.toLowerCase().substring(0, 3);
            let monthNumber = 0; // Default to January if not found
            switch (monthStr) {
                case 'jan': monthNumber = 0; break;
                case 'dec': monthNumber = 11; break;
                default:
                    console.warn(`Unknown month: ${mon}. Defaulting to January.`);
            }
            // Assuming current year for simplicity
            const currentYear = new Date().getFullYear();
            return new Date(currentYear, monthNumber, day);
        };
    }

    getDateFn('dec')(25);

    const thisDate = getDateFn('dec');
    const date = thisDate(25);

    // The currying approach does have at least one advantage in the context of TypeScript to class, however:
    // it creates a scope in which you can define local type aliases:
    function fetchAPI_A<SeedAPI>() {
        type Routes = keyof SeedAPI & string;  // local type alias

        return <Path extends Routes>(path: Path): Promise<SeedAPI[Path]> =>
            fetch(path).then(r => r.json());
    }


}