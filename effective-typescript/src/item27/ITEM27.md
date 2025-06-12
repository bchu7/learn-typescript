## Item 27: Use async Functions Instead of Callbacks to Improve Type Flow

### Things to Remember
Prefer Promises to callbacks for better composability and type flow.

Prefer async and await to raw Promises when possible. They produce more concise, straightforward code and eliminate whole classes of errors.

If a function returns a Promise, declare it async.
