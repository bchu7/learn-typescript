// ## Item 34: Prefer Unions of Interfaces to Interfaces with Unions
// see also Item 29, where RequestState a union of different interfaces

namespace Item34 {

    interface FillLayout { }
    interface FillPaint { }
    interface LineLayout { }
    interface LinePaint { }
    interface PointLayout { }
    interface PointPaint { }

    // interface Layer {
    //     type: 'fill' | 'line' | 'point';
    //     layout: FillLayout | LineLayout | PointLayout;
    //     paint: FillPaint | LinePaint | PointPaint;
    // }

    // better to model each type with separate interfaces

    interface FillLayer {
        type: 'fill';
        layout: FillLayout;
        paint: FillPaint;
    }
    interface LineLayer {
        type: 'line';
        layout: LineLayout;
        paint: LinePaint;
    }
    interface PointLayer {
        type: 'point';
        layout: PointLayout;
        paint: PointPaint;
    }
    // By defining Layer in this way, you’ve excluded the possibility of mixed layout and paint properties.
    type Layer = FillLayer | LineLayer | PointLayer;

    // ----------------------------
    interface Person {
        name: string;
        // These will either both be present or not be present
        placeOfBirth?: string;
        dateOfBirth?: Date;
    }

    // beter model like this
    interface Person {
        name: string;
        // in case birth, then there must be place and date
        birth?: {
            place: string;
            date: Date;
        }
    }

}