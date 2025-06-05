/**
 * A promise can be either pending or fulfilled or rejected. Where fulfilled and rejected has status setlled.
 * pending --value---> fullfiled
 * pending --reason--> rejected
 * 
 * 
 */

//
// TypeScript and promises
//

// function iReturnPromiseAfter1Second(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Hello world!"), 1000);
//     });
// }

// Promise.resolve(123)
//     .then((res) => {
//         // res is inferred to be of type `number`
//         return iReturnPromiseAfter1Second(); // We are returning `Promise<string>`
//     })
//     .then((res) => {
//         // res is inferred to be of type `string`
//         console.log(res); // Hello world!
//     });

//
// Just wrap the function call in a promise
//

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const sleep = (ms: number) => delay(ms).then(() => console.log(`--------------------`));

// Note that there is a handy dandy function in NodeJS that does this node style function => promise returning function magic for you
import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);

console.log(readFile.name); // must use to avoid compiler error

//
// Parallel control flow
//
// an async function to simulate loading an item from some server
function loadItem(id: number): Promise<{ id: number }> {
    return new Promise((resolve) => {
        console.log('loading item', id);
        setTimeout(() => { // simulate a server delay
            resolve({ id: id });
        }, 100);
    });
}

// Chained / Sequential
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    }); // overall time will be around 2s

// Concurrent / Parallel
Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
        [item1, item2] = res;
        console.log(`done: ${item1.id}, ${item2.id}`);
    }); // overall time will be around 1s

sleep(500);

/**
 * Sometimes, you want to run a series of async tasks, but you get all you need as long as any one of these tasks is settled.
 * Promise provides a static Promise.race function for this scenario:
 */
const task1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'one');

    setTimeout(reject, 1000, 'one');
});

const task2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'two');

    setTimeout(reject, 1000, 'two');
});

Promise.race([task1, task2]).then((value) => {
    console.log(value); // "one"
    // Both resolve, but task1 resolves faster
});