# NodeJs CLI Starter template

Starter template to get going ith NodeJs CLI development without much fuss.

| Branch  |                                                                                                           |                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| develop | ![Build](https://github.com/shubhranshu/nodejs-starter-template/workflows/Build/badge.svg?branch=develop) | ![Test](https://github.com/shubhranshu/nodejs-starter-template/workflows/Test/badge.svg?branch=develop) |
| master  | ![Build](https://github.com/shubhranshu/nodejs-starter-template/workflows/Build/badge.svg?branch=master)  | ![Test](https://github.com/shubhranshu/nodejs-starter-template/workflows/Test/badge.svg?branch=master)  |

## Configured tooling

- [x] ES6 support with babel
- [x] Test script with Ava
- [x] Watch scripts for run and tests
- [x] Babel, Prettier and Eslint configs
- [x] Github Actions for build and test

## Usage and Configuration

Using this template to initialise repository or copy the files as required. Or simply use it to get some inspiration.

### Scripts

- **build** : `Build the project and copy the built files to dist folder`
- **test** : `Run ava tests`
- **watch-test** : `Watch code and run tests on code change`
- **cli-run** : `Run the code without building`
- **watch-run** : `Use nodemon to watch code and run on change`

### Packages

We are using [npm](https://github.com/npm/cli) as the default package manager. To use [Yarn](https://github.com/yarnpkg/yarn) delete [package-lock.json](package-lock.json) and run `yarn`

- [chalk](https://github.com/chalk/chalk)
- [inquirer](https://github.com/SBoudrias/Inquirer.js)
- [progress](https://github.com/visionmedia/node-progress)

Dev dependencies

- [ava](https://github.com/avajs/ava)
- [babel](https://github.com/babel/babel)
- [eslint](https://github.com/eslint/eslint)
- [nodemon](https://github.com/remy/nodemon)

## To Do

- [ ] Being able to parameterise the setup
- [ ] Options for Test framework
- [ ] CLI setup without using the repository
