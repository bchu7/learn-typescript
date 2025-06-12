## Item 15: Use Type Operations and Generic Types to Avoid Repeating Yourself

### Things to Remember
The DRY (don’t repeat yourself) principle applies to types as much as it applies to logic.

Name types rather than repeating them. Use extends to avoid repeating fields in interfaces.

Build an understanding of the tools provided by TypeScript to map between types. These include keyof, typeof, indexing, and mapped types.

Generic types are the equivalent of functions for types. Use them to map between types instead of repeating type-level operations.

Familiarize yourself with generic types defined in the standard library, such as Pick, Partial, and ReturnType.

Avoid over-application of DRY: make sure the properties and types you’re sharing are really the same thing.

```
A good rule of thumb is that if it’s hard to name a type (or a function), then it may not be a useful abstraction.
In this case, NamedAndIdentified just describes the structure of the type, not what it is.
```