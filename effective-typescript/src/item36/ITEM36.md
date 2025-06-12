## Item 36: Use a Distinct Type for Special Values

### Things to Remember
Avoid special values that are assignable to regular values in a type. They will reduce TypeScript’s ability to find bugs in your code.

Prefer null or undefined as a special value instead of 0, -1, or "".

Consider using a tagged union rather than null or undefined if the meaning of those values isn’t clear.
