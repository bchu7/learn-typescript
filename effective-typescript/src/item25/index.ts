// ## Item 25: Understand Evolving Types

// It’s also sometimes called “evolving let” or “evolving arrays.”
let value;
//  ^? let value: any
if (Math.random() < 0.5) {
  value = /hello/;
  value;
  // ^? let value: RegExp
} else if (Math.random() < 0.2) {
    value = '';
    value;
}
else {
  value = 12;
  value;
  // ^? let value: number
}
value;
// ^? let value: string | number | RegExp

// -----------------------

