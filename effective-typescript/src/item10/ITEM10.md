## Item 10: Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)

### Things to Remember

Avoid TypeScript object wrapper types. Use the primitive types instead: string instead of String, number instead of Number, boolean instead of Boolean, symbol instead of Symbol, and bigint instead of BigInt.

Understand how object wrapper types are used to provide methods on primitive values. Avoid instantiating them or using them directly, with the exception of Symbol and BigInt.


