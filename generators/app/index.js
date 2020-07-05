var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    scaffold() {
        console.log("Copying the files");
    }

    install() {
        console.log("Installing required dependencies");
        this.npmInstall();
    }

    end() {
        console.log("Follow the instructions from README.md -> How to");
    }
};
