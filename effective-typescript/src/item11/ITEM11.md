## Item 11: Distinguish Excess Property Checking from Type Checking

### Things to Remember
When you assign an object literal to a variable with a known type or pass it as an argument to a function, it undergoes excess property checking.

Excess property checking is an effective way to find errors, but it is distinct from the usual structural assignability checks done by the TypeScript type checker. Conflating these processes will make it harder for you to build a mental model of assignability. TypeScript types are not “closed” (Item 4).

Be aware of the limits of excess property checking: introducing an intermediate variable will remove these checks.

A “weak type” is an object type with only optional properties. For these types, assignability checks require at least one matching property.