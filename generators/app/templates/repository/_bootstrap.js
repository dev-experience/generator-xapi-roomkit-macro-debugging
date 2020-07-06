//
// Copyright (c) 2018 Cisco Systems
// Licensed under the MIT License 
//

/**
 * Listen to realtime events via xAPI's feedback function
 * In this example, we display people count changes as they happen
 * 
 * This script only works when run against a 'RoomKit' type of device
 */

// Load necessary modules

const dotenv = require('dotenv');
const jsxapi = require('jsxapi');
const Module = require('module');

// Load environment variables from '.env' file
dotenv.config();

// Ensure must-have environment variables
ensureEnvVariable('JSXAPI_DEVICE_URL');
ensureEnvVariable('JSXAPI_USERNAME');
ensureEnvVariable('JSXAPI_PASSWORD'); // Empty passwords are not supported

// File that is being debugged should be passed as a command-line argument
// node 0-bootstrap.js <file-being-debugged.js>
const fileBeingDebugged = process.argv[2];
if (!fileBeingDebugged) {
    console.error("File to debug is not specified");
    console.warn("Path to the file is expected to be a third command-line argument");
    console.warn("Example:");
    console.warn("node _bootstrap.js <file-to-debug.js>");

    console.log();
    console.log("If you are using Visual Studio Code, switch to file that you would like to debug and press 'F5'");

    console.log();
    console.log("In any other case, run the debugging session by command:");
    console.log("node _bootstrap.js <file-to-debug.js>");

    process.exit(1);
}

// Connect to the device
console.log("Connecting to the device...");
console.log(process.env.JSXAPI_DEVICE_URL);
console.log(`Username: ${process.env.JSXAPI_USERNAME}`);
const xapi = jsxapi.connect(
    process.env.JSXAPI_DEVICE_URL,
    {
        username: process.env.JSXAPI_USERNAME,
        password: process.env.JSXAPI_PASSWORD,
    });


// Hacking the `Module._load` to ignore require in the macro that is being debugged

// Saving a reference to an original `Module._load` function
const moduleLoad = Module._load;
// Hacking `Module._load` function
Module._load = function(request, parent, isMain) {
    // If `require('xapi')` is called,
    if (request === 'xapi') {
        // Return existing reference to `xapi`
        return xapi;
    }

    // Otherwise, use original `Module._load` function
    return moduleLoad(request, parent, isMain);
};

xapi.on('error', err => {
    console.error(`Connection failed: ${err}`);
    process.exit(1);
});

xapi.on('ready', () => {
    console.log("Connection successful");

    console.log(`File being debugged: ${fileBeingDebugged}`);

    // Load the file that is being debugged.
    // First line 'const <...> = require('xapi');' will return `xapi` which is already loaded in current script
    require(fileBeingDebugged);
});

// Ensure environment variable is set
function ensureEnvVariable(varName) {
    if (!process.env[varName]) {
        console.error(`Environment variable '${varName}' is not set`);

        console.warn("Please specify info to connect to your device as JSXAPI_DEVICE_URL, JSXAPI_USERNAME, JSXAPI_PASSWORD env variables");
        console.warn("You can set the variables using '.env' file");
        process.exit(1);
    }
}
