## Item 14: Use `readonly` to Avoid Errors Associated with Mutation

### Things to Remember
If your function does not modify its parameters, declare them readonly (arrays) or Readonly (object types). This makes the function’s contract clearer and prevents inadvertent mutations in its implementation.

Understand that readonly and Readonly are shallow, and that Readonly only affects properties, not methods.

Use readonly to prevent errors with mutation and to find the places in your code where mutations occur.

Understand the difference between const and readonly: the former prevents reassignment, the latter prevents mutation.

```shell
# https://github.com/ts-essentials/ts-essentials
# Use ts-essentials if:
# You need both type utilities and runtime helpers.
# You are working on a project that requires stricter type safety and runtime assertions.
# You prefer a library that combines type enhancements with runtime features.
npm install ts-essentials

# https://github.com/sindresorhus/type-fest
# Use type-fest if:
# You need a lightweight library focused solely on type utilities.
# You want access to a wide range of modern and advanced TypeScript types.
# Your project doesn't require runtime utilities
npm install type-fest
```