## Item 4: Get Comfortable with Structural Typing

### Things to Remember
Note: Vector2D:{x:number, y:number}, Vector3D:{x:number, y:number, z:number}. This is where the term “structural typing” comes from.

```TypeScript
// Structural typing: If two types have the same properties and methods, they are considered compatible—even if they were defined separately.

type Vector = {x: number, y: number};

function printVector(v: Vector) {
    console.log(`x: ${v.x}, y: ${v.y}`);
}

const myVector = {x: 10, y: 20, z: 30}; // has extra property 'z'

printVector(myVector); // OK: has required shape
```

Understand that JavaScript is duck typed and TypeScript uses structural typing to model this: values assignable to your interfaces might have properties beyond those explicitly listed in your type declarations. Types are not “sealed.”

Be aware that classes also follow structural typing rules. You may not have an instance of the class you expect!

Use structural typing to facilitate unit testing.
