// ## Item 36: Use a Distinct Type for Special Values

namespace Item36 {
    function splitAround<T>(vals: readonly T[], val: T): [T[], T[]] {
        const index = vals.indexOf(val);
        // in case delimitter not found -1.
        if (index === null) {
            return [[...vals], []];
        }
        return [vals.slice(0, index), vals.slice(index + 1)];
    }

}