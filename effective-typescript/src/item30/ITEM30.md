## Item 30: Be Liberal in What You Accept and Strict in What You Produce

### Things to Remember
Input types tend to be broader than output types. Optional properties and union types are
more common in parameter types than return types.

Avoid broad return types since these will be awkward for clients to use.

To reuse types between parameters and return types, introduce a canonical form (for return types) and a looser form (for parameters).

Use Iterable\<T> instead of T[] if you only need to iterate over your function parameter.