## Item 25: Understand Evolving Types

### Things to Remember
While TypeScript types typically only refine, the types of values initialized to null, undefined, or [] are allowed to evolve.

Recognize and understand this construct where it occurs, and use it to reduce the need for type annotations in your own code.

For better error checking, consider providing an explicit type annotation instead of using evolving types.