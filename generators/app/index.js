var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    scaffold() {
        console.log();
        console.log("** Copying the template files:");
        console.log();

        this.fs.copy(this.templatePath('dotfiles/__env'), this.destinationPath('.env'));
        this.fs.copy(this.templatePath('dotfiles/__vscode'), this.destinationPath('.vscode'));
        this.fs.copy(this.templatePath('repository/**/*'), this.destinationPath(''));
    }

    install() {
        console.log();
        console.log("** Installing required dependencies");
        console.log("npm install");
        console.log();

        this.npmInstall();
    }

    end() {
        console.log();
        console.warn("** Follow the instructions from README.md -> How to");
        console.log();
    }
};
