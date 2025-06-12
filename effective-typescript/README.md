Note: the information and examples in this project are taken from the following book.

# Effective TypeScript
Effective TypeScript: 83 Specific Ways to Improve Your TypeScript. Vanderkam, Dan. O'Reilly Media. Kindle Edition.

find: \[:memo: Item (\d+)\]\(.*?\):
replace: Item \1:

```shell
# Create an item
ts-node create item3
```

```shell
# run un item
ts-node src/item3
```

---
- **Chapter 1: Getting to Know TypeScript**
  - Item 1: Understand the Relationship Between TypeScript and JavaScript
  - Item 2: Know Which TypeScript Options You're Using
  - Item 3: Understand That Code Generation Is Independent of Types
  - Item 4: Get Comfortable with Structural Typing
  - Item 5: Limit Use of the `any` Type

- **Chapter 2: TypeScript's Type System**
  - Item 6: Use Your Editor to Interrogate and Explore the Type System
  - Item 7: Think of Types as Sets of Values
  - Item 8: Know How to Tell Whether a Symbol Is in the Type Space or Value Space
  - Item 9: Prefer Type Annotations to Type Assertions
  - Item 10: Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)
  - Item 11: Distinguish Excess Property Checking from Type Checking
  - Item 12: Apply Types to Entire Function Expressions When Possible
  - Item 13: Know the Differences Between `type` and `interface`
  - Item 14: Use `readonly` to Avoid Errors Associated with Mutation
  - Item 15: Use Type Operations and Generic Types to Avoid Repeating Yourself
  - Item 16: Prefer More Precise Alternatives to Index Signatures
  - Item 17: Avoid Numeric Index Signatures

- **Chapter 3: Type Inference and Control Flow Analysis**
  - Item 18: Avoid Cluttering Your Code with Inferable Types
  - Item 19: Use Different Variables for Different Types
  - Item 20: Understand How a Variable Gets Its Type
  - Item 21: Create Objects All at Once
  - Item 22: Understand Type Narrowing
  - Item 23: Be Consistent in Your Use of Aliases
  - Item 24: Understand How Context Is Used in Type Inference
  - Item 25: Understand Evolving Types
  - Item 26: Use Functional Constructs and Libraries to Help Types Flow
  - Item 27: Use async Functions Instead of Callbacks to Improve Type Flow
  - Item 28: Use Classes and Currying to Create New Inference Sites

- **Chapter 4: Type Design**
  - Item 29: Prefer Types That Always Represent Valid States
  - Item 30: Be Liberal in What You Accept and Strict in What You Produce
  - Item 31: Don’t Repeat Type Information in Documentation
  - Item 32: Avoid Including `null` or `undefined` in Type Aliases
  - Item 33: Push Null Values to the Perimeter of Your Types
  - Item 34: Prefer Unions of Interfaces to Interfaces with Unions
  - Item 35: Prefer More Precise Alternatives to String Types
  - Item 36: Use a Distinct Type for Special Values
  - Item 37: Limit the Use of Optional Properties
  - Item 38: Avoid Repeated Parameters of the Same Type
  - Item 39: Prefer Unifying Types to Modeling Differences
  - Item 40: Prefer Imprecise Types to Inaccurate Types
  - Item 41: Name Types Using the Language of Your Problem Domain
  - Item 42: Avoid Types Based on Anecdotal Data

- **Chapter 5: Unsoundness and the any Type**
  - Item 43: Use the Narrowest Possible Scope for `any` Types
  - Item 44: Prefer More Precise Variants of `any` to Plain `any`
  - Item 45: Hide Unsafe Type Assertions in Well-Typed Functions
  - Item 46: Use unknown Instead of `any` for Values with an Unknown Type
  - Item 47: Prefer Type-Safe Approaches to Monkey Patching
  - Item 48: Avoid Soundness Traps
  - Item 49: Track Your Type Coverage to Prevent Regressions in Type Safety

- **Chapter 6: Generics and Type-Level Programming**
  - Item 50: Think of Generics as Functions Between Types
  - Item 51: Avoid Unnecessary Type Parameters
  - Item 52: Prefer Conditional Types to Overload Signatures
  - Item 53: Know How to Control the Distribution of Unions over Conditional Types
  - Item 54: Use Template Literal Types to Model DSLs and Relationships Between Strings
  - Item 55: Write Tests for Your Types
  - Item 56: Pay Attention to How Types Display
  - Item 57: Prefer Tail-Recursive Generic Types
  - Item 58: Consider Codegen as an Alternative to Complex Types

- **Chapter 7: TypeScript Recipes**
  - Item 59: Use `never` Types to Perform Exhaustiveness Checking
  - Item 60: Know How to Iterate Over Objects
  - Item 61: Use `Record` Types to Keep Values in Sync
  - Item 62: Use Rest Parameters and Tuple Types to Model Variadic Functions
  - Item 63: Use Optional `never` Properties to Model Exclusive Or
  - Item 64: Consider Brands for Nominal Typing

- **Chapter 8: Type Declarations and @types**
  - Item 65: Put TypeScript and `@types` in `devDependencies`
  - Item 66: Understand the Three Versions Involved in Type Declarations
  - Item 67: Export All Types That Appear in Public APIs
  - Item 68: Use TSDoc for API Comments
  - Item 69: Provide a Type for `this` in Callbacks if It's Part of Their API
  - Item 70: Mirror Types to Sever Dependencies
  - Item 71: Use Module Augmentation to Improve Types

- **Chapter 9: Writing and Running Your Code**
  - Item 72: Prefer ECMAScript Features to TypeScript Features
  - Item 73: Use Source Maps to Debug TypeScript
  - Item 74: Know How to Reconstruct Types at Runtime
  - Item 75: Understand the DOM Hierarchy
  - Item 76: Create an Accurate Model of Your Environment
  - Item 77: Understand the Relationship Between Type Checking and Unit Testing
  - Item 78: Pay Attention to Compiler Performance

- **Chapter 10: Modernization and Migration**
  - Item 79: Write Modern JavaScript
  - Item 80: Use `@ts-check` and JSDoc to Experiment with TypeScript
  - Item 81: Use `allowJs` to Mix TypeScript and JavaScript
  - Item 82: Convert Module by Module Up Your Dependency Graph
  - Item 83: Don't Consider Migration Complete Until You Enable `noImplicitAny`