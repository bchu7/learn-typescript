## Item 7: Think of Types as Sets of Values

### Things to Remember
Think of types as sets of values (the type’s domain). These sets can either be finite (e.g., boolean or literal types) or infinite (e.g., number or string).

TypeScript types form intersecting sets (a Venn diagram) rather than a strict hierarchy. Two types can overlap without either being a subtype of the other.

Remember that an object can still belong to a type even if it has additional properties that were not mentioned in the type declaration.

Type operations apply to a set’s domain. The domain of A | B is the union of the domains of A and B.

Think of “extends,” “assignable to,” and “subtype of” as synonyms for “subset of.”
