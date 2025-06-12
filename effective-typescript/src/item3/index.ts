namespace Item3 {

    class Square {
        width: number;
        constructor(width: number) {
            this.width = width;
        }
    }
    class Rectangle extends Square {
        height: number;
        constructor(width: number, height: number) {
            super(width);
            this.height = height;
        }
    }
    type Shape = Square | Rectangle;

    // This works because class Rectangle introduces both a type and a value, whereas interface only introduced a type.
    // The Rectangle in type Shape = Square | Rectangle refers to the type, but the Rectangle in shape instanceof Rectangle refers to the value, in this case the constructor function.

    function calculateArea(shape: Shape) {
        if (shape instanceof Rectangle) {
            return shape.width * shape.height;
            //     ^? (parameter) shape: Rectangle
        } else {
            return shape.width * shape.width;
            //     ^? (parameter) shape: Square
        }
    }
}