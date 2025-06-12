// ## Item 38: Avoid Repeated Parameters of the Same Type

namespace Item38 {

    // avoid
    function drawRectBad(x: number, y: number, w: number, h: number, opacity: number) {
        // ...
    }

    // better, distinct Point and Dimension and use as paramters
    interface Point {
        x: number;
        y: number;
    }
    interface Dimension {
        width: number;
        height: number;
    }
    function drawRectA(topLeft: Point, size: Dimension, opacity: number) {
        // ...
    }

    // or, better as one object
    interface DrawRectParams extends Point, Dimension {
        opacity: number;
    }
    function drawRectB(params: DrawRectParams) {
        // ...
    }

    // --------------------------



}