// ## Item 15: Use Type Operations and Generic Types to Avoid Repeating Yourself

type Example = { a: number; b: string; c: boolean };
type PickedExample = Pick<Example, 'a' | 'c'>;
const picked: PickedExample = {
    a: 42,
    c: true,
};
console.log(picked);

// ------------------------------

type CylinderFn = (r: number, h: number) => number;
const surfaceArea: CylinderFn = (r, h) => 2 * Math.PI * r * (r + h);
const volume: CylinderFn = (r, h) => Math.PI * r * r * h;

for (const [r, h] of [[1, 1], [1, 2], [2, 1]]) {
    console.log(
        `Cylinder r=${r} × h=${h}`,
        `Surface area: ${surfaceArea(r, h)}`,
        `Volume: ${volume(r, h)}`);
}

// ------------------------------
interface Options { }
type HttpFn = (url: string, opts: Options) => Promise<Response>;
const httpFn: HttpFn = (url, opts) => {
    return Promise.resolve(new Response());
};

// ------------------------------
interface Vertebrate {
    weightGrams: number;
    color: string;
    isNocturnal: boolean;
}
interface Bird extends Vertebrate {
    wingspanCm: number;
}
interface Mammal extends Vertebrate {
    eatsGardenPlants: boolean;
}

// ------------------------------
interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}
type TopNavState = {
    [K in 'userId' | 'pageTitle' | 'recentFiles']: State[K]
};

// type Pick<T, K> = { [k in K]: T[k] };

// ------------------------------
interface SaveAction {
    type: 'save';
    // ...
}
interface LoadAction {
    type: 'load';
    // ...
}
type Action = SaveAction | LoadAction;
// type ActionType = 'save' | 'load';  // Repeated types!
type ActionType = Action['type'];

// ------------------------------
type ActionRecord = Pick<Action, 'type'>;

// ------------------------------
interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
}
interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
}
class UIWidget {
    constructor(init: Options) { /* ... */ }
    update(options: OptionsUpdate) { /* ... */ }
}

type OptionKeys = keyof Options;
type OptionsUpdate1 = Partial<Options>;
type OptionsUpdate2 = { [k in keyof Options]?: Options[k] };

// ------------------------------
interface LeftToRight {
    left: 'right'
}
type RightToLeft = { [k in keyof LeftToRight as LeftToRight[k]]: k };

// ------------------------------
interface Customer {
    /** How the customer would like to be addressed. */
    title?: string;
    /** Complete name as entered in the system. */
    readonly name: string;
}

// Pick is a homomorphic mapped type and preserves the optional and readonly modifiers.
type PickTitle = Pick<Customer, 'title'>;   // type PickTitle = { title?: string; }
type PickName = Pick<Customer, 'name'>;     // type PickName = { readonly name: string; }
type ManualName = { [K in 'name']: Customer[K]; }; // type ManualName = { name: string; }

// The TSDoc documentation has been copied over to the homomorphic mapped type.
// name --> Complete name as entered in the system.
const pickName: PickName = { name: '' };

// ------------------------------
const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#00FF00',
  label: 'VGA',
};
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}
type SameOptions = typeof INIT_OPTIONS;

type PartialOptions = Partial<typeof INIT_OPTIONS>;
type ReadonlyOptions = Readonly<typeof INIT_OPTIONS>;
type RequiredOptions = Required<typeof INIT_OPTIONS>;
type OmitOptions = Omit<SameOptions, 'color' | 'label'>;


// ------------------------------
function getUserInfo(userId: string) {
  const name = '';
  const age = 12;
  return {
    userId,
    name,
    age,
  };
}
type UserInfo = ReturnType<typeof getUserInfo>;
