## Item 8: Know How to Tell Whether a Symbol Is in the Type Space or Value Space

### Things to Remember
Know how to tell whether you’re in type space or value space while reading a TypeScript
expression. Use the TypeScript playground to build an intuition for this.

Every value has a static type, but this is only accessible in type space. Type space constructs such as type and interface are erased and are not accessible in value space.

Some constructs, such as class or enum, introduce both a type and a value.

typeof, this, and many other operators and keywords have different meanings in type space and value space.
