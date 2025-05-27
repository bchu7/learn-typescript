
// cipher: (text: string) => string
// This means the function takes an argument named cipher, which itself is a function that takes a string and returns a string.
const shout = (char: string) => char.toUpperCase() + "!";
const encoder = createCipher(shout);
console.log(encoder("abc")); // Output: "A!B!C!"

// This means the main function takes one argument: a function called cipher.
export function createCipher(cipher: (text: string) => string): (text: string) => string {
    return (text: string) => {
        return Array.from(text).map(char => cipher(char)).join("");
    };
}

/**
 * and ... => (text: string) => string
 * means:
 * The main function returns another function, which:
 *  Takes a string as input
 *  Returns a string
 */

function getArrayLength(arr: []) { 
  return arr.length
}
const maxThing = 12
