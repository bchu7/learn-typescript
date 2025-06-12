// ## Item 11: Distinguish Excess Property Checking from Type Checking

export namespace Item11 {
    export interface Options {
        title: string;
        darkMode?: boolean;
    }
    function createWindow(options: Options) {
        if (options.darkMode) {
            // setDarkMode();
        }
        // ...
    }

    // When you assign an object literal to a variable with a known type or pass it as an argument to a function, it undergoes excess property checking.
    createWindow({
        title: 'Spider Solitaire',
        // darkmode: true, // Not OK: lowercase 'm'

        // Object literal may only specify known properties, but 'darkmode' does not exist in type 'Options'.
        // Did you mean to write 'darkMode'?ts(2561)
    })

    // Be aware of the limits of excess property checking: introducing an intermediate variable will remove these checks.
    const intermediate = {
        title: 'Ski Free',
        darkmode: true, // lowercase 'm'
    };
    createWindow(intermediate); // OK

}