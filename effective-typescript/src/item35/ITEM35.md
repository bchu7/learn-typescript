## Item 35: Prefer More Precise Alternatives to String Types

### Things to Remember
Avoid “stringly typed” code. Prefer more appropriate types where not every string is a possibility.

Prefer a union of string literal types to string if that more accurately describes the domain of a variable. You’ll get stricter type checking and improve the development experience.

Prefer keyof T to string for function parameters that are expected to be properties of an object.