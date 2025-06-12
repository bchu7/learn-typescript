## Item 24: Understand How Context Is Used in Type Inference

### Things to Remember
Be aware of how context is used in type inference.

If factoring out a variable introduces a type error, maybe add a type annotation.

If the variable is truly a constant, use a const assertion (as const). But be aware that this may result in errors surfacing at use, rather than definition.

Prefer inlining values where it’s practical to reduce the need for type annotations.
