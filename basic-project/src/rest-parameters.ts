// Rest parameters (denoted by ...argumentName for the last argument) allow you to quickly accept multiple arguments in your function and get them as an array. This is demonstrated in the below example.

function iTakeItAll(first: string, second: string, ...allOthers: (string | unknown)[]) {
    console.log(`${first}, ${second}, ${allOthers}`);
}
iTakeItAll('foo', 'bar'); // []
iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']
