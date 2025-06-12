// ## Item 24: Understand How Context Is Used in Type Inference

type Language = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language) { /* ... */ }

setLanguage('JavaScript');  // OK

let language = 'JavaScript';
// setLanguage(language); // NOK
/*
But when you factor out a variable language (value is separated from the context), TypeScript must infer its type at the time of assignment.
It applies the usual algorithm (Item 20) and infers string, which is not assignable to Language. Hence the error.
To solve this problem:
- by annotate language like: let langauge: Language = 'JavaScript';
- by using const like: const language = 'JavaScript';
   By using const, we’ve told the type checker that this variable cannot change.
   So TypeScript can infer a more precise type for language, namely the string literal type "JavaScript".
   This is assignable to Language so the code type checks.
*/

// kind of issue with tuple
// Parameter is a (latitude, longitude) pair.
function panTo(where: [number, number]) { /* ... */ }
panTo([10, 20]); // OK
const loc = [10, 20] as const;
// // panTo(loc); // NOK
//    ~~~ Argument of type 'number[]' is not assignable to
//        parameter of type '[number, number]'
/*
To solve this problem:
- by annotate like: const loc: [number, number] = [10, 20];
- by updte the function panTo to have readonly parameter, like: function panTo(where: readonly[number, number]) {}
 */

// kind of issue with Object
interface GovernedLanguage {
  language: Language;
  organization: string;
}
function complain(language: GovernedLanguage) { /* ... */ }
complain({ language: 'TypeScript', organization: 'Microsoft' });  // OK

const ts = {
  language: 'TypeScript',
  organization: 'Microsoft',
};
// complain(ts); // NOK
//       ~~ Argument of type '{ language: string; organization: string; }'
//            is not assignable to parameter of type 'GovernedLanguage'
//          Types of property 'language' are incompatible
//            Type 'string' is not assignable to type 'Language'
/*
To solve this problem:
 - by annotate the object, like: const ts: GovernedLanguage = ...
*/

// kind of issue with callbacks
function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
  fn(Math.random(), Math.random());
}
// this is OK
callWithRandomNumbers((a, b) => {
  //                   ^? (parameter) a: number
  console.log(a + b);
  //              ^? (parameter) b: number
});

// const fn = (a, b) => {console.log(a, b)}; // NOK
/*
The solution is either to add type annotations to the parameters,
or to apply a type declaration to the entire function expression if one is available (see Item 12).
*/