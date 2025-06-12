// ## Item 16: Prefer More Precise Alternatives to Index Signatures

// [property: string] is the Index signature. In short, Index signatures are not very precise.
// rocket. <-- no intellisence
// beter define Rocket as interface instead of Index signature type
type Rocket = { [p: string]: string };
const rocket: Rocket = {
    name: 'Falcon 9',
    variant: 'v1.0',
    thrust: '4,940 kN',
};  // OK

// to csv. return index signature type
// no way to know the returned columns
function parseCSV(input: string): { [columnName: string]: string }[] {
    const lines = input.split('\n');
    const [headerLine, ...rows] = lines;
    const headers = headerLine.split(',');
    return rows.map(rowStr => {
        const row: { [columnName: string]: string } = {};
        rowStr.split(',').forEach((cell, i) => {
            row[headers[i]] = cell;
        });
        return row;
    });
}

// Beter option. return a Map type
function parseCSVMap(input: string): Map<string, string>[] {
    const lines = input.split('\n');
    const [headerLine, ...rows] = lines;
    const headers = headerLine.split(',');
    return rows.map(rowStr => {
        const row = new Map<string, string>();
        rowStr.split(',').forEach((cell, i) => {
            row.set(headers[i], cell);
        });
        return row;
    });
}

const rockets = parseCSVMap('');
const superHeavy = rockets[2];
const thrust_KN = superHeavy.get('Thrust_KN');

// ------------------
type Vec3D = Record<'x' | 'y' | 'z', number>;

// ------------------
// Finally, you can use an index type to disable excess property checking (Item 11).
declare function renderAButton(props: ButtonProps): void;
interface ButtonProps {
    title: string;
    onClick: () => void;
    [otherProps: string]: unknown;
}

renderAButton({
    title: 'Roll the dice',
    onClick: () => alert(1 + Math.floor(6 * Math.random())), theme: 'Solarized',    
    // ~~~~ Object literal may only specify known properties…
    // Above type checking error in case ButtonProps does not have property otherProps.
});