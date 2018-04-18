'use strict';

const jsonPackageDummy = {
    "name": "usage-libraries-validate",
    "version": "0.1.0",
    "description": "Checks for unused libraries in your project",
    "main": "./lib/index.js",
    "bin": {
        "usage-libraries-validate": "./bin/index.js"
    },
    "scripts": {
        "test": "jest",
        "start": "node lib/index.js"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/balmeidaa/usage-libraries-validate.git"
    },
    "author": "B. Almeida, Sandra Gil, Fernando Soto",
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/balmeidaa/usage-libraries-validate/issues"
    },
    "homepage": "https://github.com/balmeidaa/usage-libraries-validate#readme",
    "dependencies": {
        "chalk": "^2.3.2",
        "commander": "^2.15.1"
    },
    "devDependencies": {
        "jest": "^22.4.3"
    }
};
const jsonPackageResultDummy = ['chalk', 'commander', 'jest'];

module.exports = {jsonPackageDummy, jsonPackageResultDummy};
