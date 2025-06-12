## Item 33: Push Null Values to the Perimeter of Your Types

### Things to Remember
Avoid designs in which one value being null or not null is implicitly related to another value being null or not null.

Push null values to the perimeter of your API by making larger objects either null or fully non-null. This will make code clearer both for human readers and for the type checker.

Consider creating a fully non-null class and constructing it when all values are available.
