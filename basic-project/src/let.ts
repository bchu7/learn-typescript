// The ES6 let keyword in a loop would have the same behavior as the previous example:

/**
 * best practice: use const by default, switch to let only when you need to reassign variable.
 * const: block scope, use by default
 * let: block scope, use in case reassign is needed
 * var function scope, out dated, avoid 
 */

var funcs = [];
// create a bunch of functions
for (let i = 0; i < 3; i++) { // Note the use of let
    funcs.push(function() {
        console.log(i);
    })
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}