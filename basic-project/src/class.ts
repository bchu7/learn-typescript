namespace Classes_Constructors {
    class Point {
        x: number = 0;
        y: number = 0;

        // Constructor overloads
        constructor(x: number, y: number);
        constructor(xy: string);
        constructor(x: string | number, y: number = 0) {
            // Code logic here
        }
    }

    class Point3D extends Point {
        z: number = 0;
        constructor(x: number = 0, y: number = 0, z: number = 0) {
            super(x, y);
            this.z = z;
        }
    }
}