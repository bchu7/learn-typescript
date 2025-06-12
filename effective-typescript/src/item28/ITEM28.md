## Item 28: Use Classes and Currying to Create New Inference Sites

### Things to Remember
For functions with multiple type parameters, inference is all or nothing: either all type parameters are inferred or all must be specified explicitly.

To get partial inference, use either classes or currying to create a new inference site.

Prefer the currying approach if you’d like to create a local type alias.
