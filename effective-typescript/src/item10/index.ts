// ## Item 10: Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)

namespace Item10 {
    // While a string primitive does not have methods, JavaScript also defines a String object type that does.
    // JavaScript wraps it in a String object, calls the method charAt(3), and then throws the object away.

    const char = 'primitive'.charAt(3); // 'm'

    // Don't do this!
    const originalCharAt = String.prototype.charAt;
    String.prototype.charAt = function (pos) {
        console.log(this, typeof this, pos);    // output: primitive string 3
        return originalCharAt.call(this, pos);
    };
    console.log('primitive'.charAt(3));

    // ----------------------------

    // Argument of type 'String' is not assignable to parameter of type 'string'.
    // 'string' is a primitive, but 'String' is a wrapper object.
    // Prefer using 'string' when possible.    
    /*
    function isGreeting(phrase: String) {
        return ['hello', 'good day'].includes(phrase);
    }
    */

    // ----------------
    const b = 123n;
    type bb = typeof b;
    console.log(typeof b === 'bigint');

}