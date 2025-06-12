## Item 37: Limit the Use of Optional Properties

### Things to Remember
Optional properties can prevent the type checker from finding bugs and can lead to repeated and possibly inconsistent code for filling in default values.

Think twice before adding an optional property to an interface. Consider whether you could make it required instead.

Consider creating distinct types for un-normalized input data and normalized data for use in your code.

Avoid a combinatorial explosion of options.