## Item 34: Prefer Unions of Interfaces to Interfaces with Unions

### Things to Remember
Interfaces with multiple properties that are union types are often a mistake because they obscure the relationships between these properties.

Unions of interfaces are more precise and can be understood by TypeScript.

Use tagged unions to facilitate control flow analysis. Because they are so well supported, this pattern is ubiquitous in TypeScript code.

Consider whether multiple optional properties could be grouped to more accurately model your data.