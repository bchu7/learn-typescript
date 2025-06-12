## Item 18: Avoid Cluttering Your Code with Inferable Types

### Things to Remember
Avoid writing type annotations when TypeScript can infer the same type.

Ideal TypeScript code has type annotations in function/method signatures but not on local variables in their bodies.

Consider using explicit annotations for object literals to enable excess property checking and ensure errors are reported close to where they occur.

Don’t annotate function return types unless the function has multiple returns, is part of a public API, or you want it to return a named type.