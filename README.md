# Yeoman generator for `xapi-roomkit-macro-debugging` template

Yeoman generator for template from https://github.com/dev-experience/xapi-roomkit-macro-debugging.

Repository template for `xapi` RoomKit macros.

If you are developing `xapi` macros, this is for you.

## Quickstart

1. Install Node.js and NPM.
2. Install Visual Studio Code with JavaScript support.
3. Install [Yeoman](https://yeoman.io):

    Run `npm install -g yo`.

4. Install current template:

    Run `npm install -g generator-xapi-roomkit-macro-debugging`.

5. Create an empty directory.
6. Scaffold a template into that directory.

    - Switch to the directory.
    - Run `yo xapi-roomkit-macro-debugging`.

7. Check out [README.md](https://github.com/dev-experience/xapi-roomkit-macro-debugging/blob/master/README.md).
8. Try to debug sample macro:
    - Open the directory in Visual Studio Code.
    - Set URL and credentials for your device in the `.env` file.
    - Open the `macros/1-showVolume.js`.
    - Press 'F5'.
    - Check the output in "Debug Console".
9. To create your own macro, make a copy of the `macros/0-emptyMacro.js`.