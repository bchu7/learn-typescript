// ## Item 32: Avoid Including `null` or `undefined` in Type Aliases

namespace Item32 {

    interface User {
        id: string;
        name: string;
    }

    //
    // As a general rule, it’s better to avoid type aliases that allow null or undefined values.
    // note: this rule is not about its property
    //

    // in case the type alias nullable,then make this clear in its name
    type NullableUser = { id: string; name: string; } | null;

    // OK
    type BirthdayMap = {
        [name: string]: Date | undefined;
    };

    // don't do this
    type BirthdayMapNOK = {
        [name: string]: Date | undefined;
    } | undefined;

}