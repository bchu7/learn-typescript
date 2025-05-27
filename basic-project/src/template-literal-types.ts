namespace TemplateLiteralTypes {
    type EmailLocaleIDs = "welcome_email" | "email_heading";
    type FooterLocaleIDs = "footer_title" | "footer_sendoff";
    type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

    type LocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
    type Lang = "en" | "ja" | "pt";
    type LocaleMessageIDs = `${Lang}_${LocaleIDs}`;

    const enEmailMessageId: LocaleMessageIDs = 'en_email_heading_id';
}

// TODO, still not full understand defined type PropEventSource and use
namespace TemplateLiteralTypes_StringUnionsInTypes_Inference {
    // The power in template literals comes when defining a new string based on information inside a type.

    /// Create a "watched object" with an `on` method
    /// so that you can watch for changes to properties.
    // declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

    function makeWatchedObject<Type extends object>(obj: Type): Type & PropEventSource<Type> {
        type EventCallbacks = {
            [K in keyof Type as `${string & K}Changed`]?: Array<(newValue: Type[K]) => void>;
        };

        const eventListeners: EventCallbacks = {};

        const proxy = new Proxy(obj, {
            set(target, prop, value, receiver) {
                if (Object.prototype.hasOwnProperty.call(target, prop)) {
                    const eventKey = `${String(prop)}Changed` as keyof EventCallbacks;
                    const listeners = eventListeners[eventKey] as Array<(newValue: unknown) => void> | undefined;
                    listeners?.forEach(callback => callback(value));
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });

        const on = function(eventName: string, callback: (newValue: unknown) => void): void {
            const key = eventName as keyof EventCallbacks;
            if (!eventListeners[key]) {
                eventListeners[key] = [] as unknown as EventCallbacks[keyof EventCallbacks];
            }
            (eventListeners[key] as Array<(newValue: unknown) => void>).push(callback);
        }

        return Object.assign(proxy, { on }) as Type & PropEventSource<Type>;
    }

    // type PropEventSource<Type> = {
    //     on(eventName: `${string & keyof Type}Changed`, callback: (newValue: unknown) => void): void;
    // };

    type PropEventSource<Type> = {
        on<Key extends string & keyof Type>
            (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
    };

    const person = makeWatchedObject({
        firstName: 'Saoirse',
        lastName: 'Ronan',
        age: 26,
    });

    // makeWatchedObject has added `on` to the anonymous Object

    person.on('firstNameChanged', (newName) => {
        console.log(`uppercase: firstName was changed to ${newName.toUpperCase()}`);
    });

    person.on('firstNameChanged', (newName) => {
        console.log(`lowercase: firstName was changed to ${newName.toLowerCase()}`);
    });

    person.on('ageChanged', (newAge) => {
        console.log(`age changed to: ${newAge}`);
    });

    person.firstName = 'aaa';
    person.age = 23;

}

namespace TemplateLiteralTypes_StringManipulationTypes {
    type Greeting = 'Hello, World'
    type ShoutyGreeting = Uppercase<Greeting>
    const shout: ShoutyGreeting = 'HELLO, WORLD'

    type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
    type MainID = ASCIICacheKey<"my_app">
    const main: MainID = 'ID-MY_APP';

    const lower: Lowercase<Greeting> = 'hello, world';
    const capital: Capitalize<Greeting> = 'Hello, World';
    const unCapital: Uncapitalize<Greeting> = 'hello, World';
}