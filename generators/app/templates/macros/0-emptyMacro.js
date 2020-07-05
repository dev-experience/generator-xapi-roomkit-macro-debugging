const xapi = require('xapi');

// Put your code instead of "// Put your code here". Don't change the rest of the code.

// Check out mini-courses on YouTube:
// "Writing xAPI Macros 101" [Playlist]
// "JavaScript for xAPI Macros 101" [Playlist]

// To debug this file from your local machine:
// 1. Follow setup instructions described in `README.md`.
// 2. Simply press 'F5' in current tab.

// All `xapi` commands return promises. That's why you have to use `.then(<...>)`.
// To learn more about promises basics check out: https://javascript.info/promise-basics

// It's much easier to use `await` syntax to work with promises.
// `await` helps to await promises to avoid `.then(x => { <...>.then(<...>)})` nesting.
// `async` enables `await` usage.
// Check out for more info: https://javascript.info/async-await

// Define the `async` function
const macro = (async () => {

   // Put your code here
   // const volume = await xapi.status.get('Audio Volume');
   // console.log(volume);

});

// // In case of wokring with events, you need to use `async` function as well
// xapi.on('ready', async () => {
//    const volume = await xapi.status.get('Audio Volume');
//    console.log(volume);
// });

// Execute
macro();
