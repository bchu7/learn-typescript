namespace MappedTypes {

    type Horse = 'Work horse' | 'Race horse'
    type OnlyBoolsAndHorses = {
        [key: string]: boolean | Horse;
    };

    const conforms: OnlyBoolsAndHorses = {
        del: true,
        rodney: false,
        raceAnimal: 'Race horse',
        workAnimal: 'Work horse',
    };

    // A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type

    type OptionsFlags<T> = {
        [a in keyof T]: boolean;
    };

    type Features = {
        darkMode: () => void;
        newUserProfile: () => void;
    };

    type FeatureOptions = OptionsFlags<Features>;

    // Create an instance of FeatureOptions
    const featureOptions: FeatureOptions = {
        darkMode: true,
        newUserProfile: false
    };

    // Implement the Features functions
    const features: Features = {
        darkMode: () => {
            console.log("Dark mode enabled");
        },
        newUserProfile: () => {
            console.log("New user profile created");
        }
    };

    // Example usage
    if (featureOptions.darkMode) {
        features.darkMode();
    }
    if (featureOptions.newUserProfile) {
        features.newUserProfile();
    }

}

namespace MappedTypesMappingModifiers {

    // You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.
    // Removes 'readonly' attributes from a type's properties
    type CreateMutable<T> = {
        -readonly [k in keyof T]: T[k];
    };

    // Removes optional (?) attributes from a type's properties
    type RemoveMixedOptional<T> = {
        [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K]; // checks whether Pick<T, K> is an empty object ({})
    } & {
        [K in keyof T as {} extends Pick<T, K> ? K : never]-?: T[K];
    };

    type RemoveOptional<T> = {
        [k in keyof T]-?: T[k];
    }

    type WithOptional<T> = {
        [k in keyof T]?: T[k];
    }

    type Gender = 'Male' | 'Female'
    type LockedAccount = {
        readonly id: string;
        name: string;
        gender?: Gender;
    };

    type UnlockedAccount = CreateMutable<LockedAccount>;
    type RequiredAccount = RemoveOptional<LockedAccount>;
    type OptionalAccount = WithOptional<LockedAccount>;

    // Removes 'optional' attributes from a type's properties
    type Concrete<Type> = {
        [Property in keyof Type]-?: Type[Property];
    };

    type MaybeUser = {
        id: string;
        name?: string;
        age?: number;
    };

    type User = Concrete<MaybeUser>; // OK
    type NoOptionalUser = RemoveMixedOptional<User>; // this seems not to work!!!

}

namespace MappedTypesAs {

    type Getters<Type> = {
        [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
    };

    // Getters type for only the 'name' property
    type NameGetter<Type> = {
        [Property in keyof Type as Property extends 'name' ? `get${Capitalize<string & Property>}` : never]: () => Type[Property]
    };

    interface Person {
        name: string;
        age: number;
        location: string;
    }

    class PersonX implements Person {
        name: string;
        age: number;
        location: string;
        constructor(name: string, age: number, location: string) {
            this.name = name;
            this.age = age;
            this.location = location;
        }
    }

    type LazyPerson = Getters<PersonX>;
    type NamePerson = NameGetter<Person>;
    type Upper = Uppercase<string>;
    type Capital = Capitalize<string>;
    type UnCapital = Uncapitalize<string>;


    const lazyPerson: LazyPerson = { getName: () => 'Pietje', getAge: () => 21, getLocation: () => 'Hilversum' }
    console.log(lazyPerson.getName());
    const namePerson: NamePerson = { getName: () => 'Anne' }
    const upper: Upper = 'AAA';
    const capital: Capitalize<string> = 'Aaa bb';
    const unCapital: UnCapital = 'aAAA aa';

    function toLowerCase<T extends string>(text: Uppercase<T>): Lowercase<T> {
        // Use type assertion to ensure the return value is of type Lowercase<T>
        return text.toLowerCase() as Lowercase<T>;
    }
    const text = 'AAAAA';
    console.log(`${text} --> lowerCase --> ${toLowerCase(text)}`);

}

namespace MappedTypesFilterOutKeys {
    // Remove the 'kind' property
    type RemoveKindField<Type> = {
        [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property]
    };

    interface Circle {
        kind: "circle";
        radius: number;
    }

    type KindlessCircle = RemoveKindField<Circle>;

}

namespace MappedTypesUnions {
    type EventConfig<Events extends { kind: string }> = {
        [E in Events as E['kind']]: (event: E) => void;
    }

    type SquareEvent = { kind: 'square', x: number, y: number };
    type CircleEvent = { kind: 'circle', x: number, radius: number };
    type NoKindEvent = { kinder: 'kinder', x: number, y: number };

    type Config = EventConfig<SquareEvent | CircleEvent>
    const config: Config = {
        circle: (e: CircleEvent) => console.log(`event: ${e.kind} x = ${e.x}`),
        square: (e: SquareEvent) => console.log(`event: ${e.kind} x = ${e.x}`),
    };
    config.circle({ kind: 'circle', x: 2.3, radius: 3.3 });
    config.square({ kind: 'square', x: 2.4, y: 3.3 })
}