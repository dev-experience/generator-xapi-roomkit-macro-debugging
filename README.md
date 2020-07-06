# Yeoman generator for `xapi-roomkit-macro-debugging` template

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/LICENSE) [![npm version](https://img.shields.io/npm/v/generator-xapi-roomkit-macro-debugging.svg?style=flat)](https://www.npmjs.com/package/generator-xapi-roomkit-macro-debugging) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/.github/CONTRIBUTING.md)

Yeoman generator for template from https://github.com/dev-experience/xapi-roomkit-macro-debugging.

Repository template for xAPI` Room Kit Macros.

If you are developing xAPI Macros, this is for you (see ["Problem statement" below](#problem-statement)).

## Quickstart

1. Install Node.js and NPM.
2. Install Visual Studio Code with JavaScript support.
3. Install [Yeoman](https://yeoman.io) globally:

    Run `npm install -g yo`.

4. Install the template globally:

    Run `npm install -g generator-xapi-roomkit-macro-debugging`.

5. Create an empty directory.
6. Scaffold a template into that directory.

    - Switch to the directory.
    - Run `yo xapi-roomkit-macro-debugging`.

7. Check out [README.md](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/README.md) or see the docs below.
8. Try to debug sample macro:
    - Open the directory in Visual Studio Code.
    - Set URL and credentials for your device in the `.env` file.
    - Open the `macros/1-showVolume.js`.
    - Press 'F5'.
    - Check the output in "Debug Console".
9. To create your own macro, make a copy of the `macros/0-emptyMacro.js`.

## `xapi-roomkit-macro-debugging` template documentation (copied from the template with minor updates)

----


# xAPI Room Kit macro debugging template

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/dev-experience/xapi-roomkit-macro-debugging/blob/master/.github/CONTRIBUTING.md)

Repository template is helpful for developing and debugging your macros.

## Problem statement

It's quite hard to write a good macro for a Cisco Room Kit CE device.

- You need to log in to the device and write your code in the browser.
- CE Macro Editor is too simple.
- It doesn't provide you any debugging capabilities.
- It's complaining about `async`/`await` and confusing you with errors.
- You need to copy-paste the code all the time to store it as a file and commit your macros to Git repository.

![CE Macro Editor](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/ce-macro-editor.jpg)

## Solution

**Just use the Yeoman generator `generator-xapi-roomkit-macro-debugging`.**

And you will be able to:

1. Keep your macros in files. It makes easy to commit your changes to GIT for change history.

    ![Git history](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/git-history.png)

2. Run your macros from your local machine in Visual Studio Code.

    ![Run xapi macro in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_run.gif)

3. Use code completion for JavaScript in Visual Studio Code.

    ![Code completion in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_code-completion.gif)

4. Debug your macros:
    - Step-by-step execution.
    - Observe current variable values.
    - Put a breakpoint to stop the execution and to see what is going on.

    ![Step-by-step execution, watching variable values in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_step-by-step.gif)

5. Use `await` for promises to simplify your code.

    ![Async/await for promises in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_async-await.gif)


## How to

### Prerequisites

1. Install Visual Studio Code with JavaScript support:

    <img src="https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code-18x18.png" height="18" /> Visual Studio Code
    
    https://code.visualstudio.com/download
    
2. Install Node.js with NPM:

    <img src="https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/nodejs-logo-color.svg" height="18" /> <img src="https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/npm-logo-red.svg" height="12" />
    
    https://nodejs.org/en/download/

3. Prepare files (or **use Yeoman template, see [above](#quickstart)**):
    - Create empty directory.
    - Copy all the files from current repository there.

4. Run `npm install` in the directory (only once).


### Develop and debug
- Open the directory in Visual Studio Code.

    ![Open directory in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_open-folder.gif)

- Open sample macro 'https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/macros/1-showVolume.js'.

    ![Open macro 'https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/macros/1-showVolume.js' in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_open-macro.gif)

- Put a breakpoint on any `console.log(...)` statement by pressing 'F9'.

    ![Put a breakpoint on any console.log statement by pressing 'F9'](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_put-breakpoint.gif)

- Run debugging by pressing 'F5' while you are in the tab with a macro you want to debug
    - Visual Studio Code will run special script '_bootstrap.js' by `node`.
    - Script will load `xapi` and will check environment variables required to connect to the device to execute macro.
    - Script will load you macro and run it.
    - All output from the macro will be visible in Debug Console in Visual Studio Code.

    ![Run xapi macro in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_run.gif)

- Enjoy the debugging with:

    - Step-by-step execution (press 'F10' to advance), watching variable values (hover a variable by mouse).

        ![Step-by-step execution, watching variable values in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_step-by-step.gif)

    - Simple promises handling with `await` and without `.then()`:

        ```javascript
        const volume = await xapi.status.get('Audio Volume');
        const nbActiveCalls = await xapi.status.get('SystemUnit State NumberOfActiveCalls');
        const doNotDisturbStatus = await xapi.status.get('Conference DoNotDisturb');
        const tandbyState = await xapi.status.get('Standby State');
        const peopleCount = await xapi.status.get('RoomAnalytics PeopleCount Current');
        ```

        instead of 

        ```javascript
        xapi.status.get('Audio Volume').then(volume => {
          xapi.status.get('SystemUnit State NumberOfActiveCalls').then(nbActiveCalls => {
            xapi.status.get('Conference DoNotDisturb').then(doNotDisturbStatus => {
              xapi.status.get('Standby State').then(tandbyState => {
                xapi.status.get('RoomAnalytics PeopleCount Current').then(peopleCount => {
                  // ...
                });
              });
            });
          });
        });
        ```

        ![Async/await for promises in Visual Studio Code](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs/img/vs-code_async-await.gif)

## Learn

### "Writing xAPI Macros 101"

Check out a mini-course "Writing xAPI Macros 101" on YouTube:

[Playlist]
[Presentation]

### "JavaScript for xAPI Macros 101"

[Playlist]


## Template files ([see](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/))

- *[README.md](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/README.md)*

  Current docs.

- *[package.json](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/package.json)*

  Metadata and dependencies definition. Run `npm install` once to install `jsxapi`.

- *[.gitignore](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/.gitignore)*

  Excludes particular files and directories from GIT commits. Help to make your repository clean and tidy.

- *[.vscode/launch.json](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/dotfiles/__vscode/launch.json)*

  Launch configuration for Visual Studio Code. Enables debugging by 'F5'

- *[_bootstrap.js](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/_bootstrap.js)*

  Script which is being executed when you press 'F5'.
  
  Helps to load `xapi`, check environment variables, connects to the device, loads the macro for debugging

- *[.env](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/dotfiles/__env)*

  Helps you to set device URL, username, and password to connect to the device.
  File is added to `.gitignore`, so you will not accidentially commit the password to a GIT repository.

- *[macros/](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/macros)*

  **Put all your macros there**

    - *[macros/1-showVolume.js](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/macros/1-showVolume.js)*

      Sample macro to check out debugging capabilities.

    - *[macros/0-emptyMacro.js](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/macros/0-emptyMacro.js)*

      **Copy this one to create your new macro**.

- *[docs/](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/docs)*

  Documentation files.

- *[macro-tutorial.pdf](https://raw.githubusercontent.com/dev-experience/generator-xapi-roomkit-macro-debugging/v0.2.0/generators/app/templates/repository/macro-tutorial.pdf)*

  Cisco Macro Scripting Tutorial.


## Additional resources

1. Handy samples for xAPI Macros

    [https://developer.cisco.com/codeexchange/github/repo/CiscoDevNet/xapi-samples](https://developer.cisco.com/codeexchange/github/repo/CiscoDevNet/xapi-samples)

    [![published](https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg)](https://developer.cisco.com/codeexchange/github/repo/CiscoDevNet/xapi-samples)

2. New to xAPI Macros?

    - Check the [QuickStart Guide](https://github.com/CiscoDevNet/xapi-samples/blob/master/docs/QuickStart.md) to learn to load Controls and Macros to your device.
    - Take a DevNet Tutorial from the xAPI track (intro to xAPI and creating custom UI Extensions).

3. Don't have a CE device at hand to mess up with?

    - Reserve a [DevNet sandbox](https://github.com/CiscoDevNet/awesome-xapi/#sandboxes) equiped with CE latest.

4. Going further

    Once you're done browsing the examples in this repo, here are a few suggestions

    - Check the [official Macro Samples repository](https://github.com/CiscoDevNet/roomdevices-macros-samples).
    - Load the [Postman collection for xAPI](https://github.com/CiscoDevNet/postman-xapi) to invoke the xAPI from code external to the Room Device.
    - Read through the full [CE Customization PDF Guide](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce99/collaboration-endpoint-software-api-reference-guide-ce99.pdf).
    - Check for the curated list of resources at [awesome-xapi](https://github.com/CiscoDevNet/awesome-xapi).
