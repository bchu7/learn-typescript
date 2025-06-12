## Item 31: Don’t Repeat Type Information in Documentation

### Things to Remember
Avoid repeating type information in comments and variable names. In the best case it is duplicative of type declarations, and in the worst case it will lead to conflicting information.

Declare parameters readonly rather than saying that you don’t mutate them.

Consider including units in variable names if they aren’t clear from the type (e.g., timeMs or temperatureC).