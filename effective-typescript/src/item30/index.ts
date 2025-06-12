// ## Item 30: Be Liberal in What You Accept and Strict in What You Produce

/*
It’s fine for your functions to be broad in what they accept as inputs,
but they should generally be more specific in what they produce as outputs. 
*/
namespace Item30 {

    interface LngLat { lng: number; lat: number; };
    type LngLatLike = LngLat | { lon: number; lat: number; } | [number, number];

    interface Camera {
        center: LngLat;
        zoom: number;
        bearing: number;
        pitch: number;
    }
    // extends Camera, override property 'center' and make all property optional
    interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
        center?: LngLatLike;
    }
    type LngLatBounds = { northeast: LngLatLike, southwest: LngLatLike } |
    [LngLatLike, LngLatLike] |
    [number, number, number, number];

    declare function setCamera(camera: CameraOptions): void;
    declare function viewportForBounds(bounds: LngLatBounds): Camera;

    // -------------------------
    // this case input should be readonly or only iterable
    // return type number is strict, this is OK.
    function sum(xs: number[]): number {
        let sum = 0;
        for (const x of xs) {
            sum += x;
        }
        return sum;
    }
    let six = sum([1, 2, 3]);

    // beter num[] is now readonly
    function sumReadonly(xs: Readonly<number[]>): number {
        let sum = 0;
        for (const x of xs) {
            sum += x;
        }
        return sum;
    }
    six = sumReadonly([1, 2, 3]);

    // best use Iterable<number> since we only need to iterate the array
    function sumIterable(xs: Iterable<number>): number {
        let sum = 0;
        for (const x of xs) {
            sum += x;
        }
        return sum;
    }
    six = sumIterable([1, 2, 3]);

    // -------------------------
    /*
    The * after function declares a generator function.
    Generator functions return an iterator
    Inside the function, you use yield to produce values one at a time, pausing between each.
    */
    function* range(limit: number): IterableIterator<number> {
        for (let i = 0; i < limit; i++) {
            yield i;
        }
    }

    const sumValue = sumIterable(range(10));
}