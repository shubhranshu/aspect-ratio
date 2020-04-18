import { ChalkTest } from './ChalkTest';
import { InquirerCli } from './cli';

console.log('############## Running Chalk test #############');
var chalkTest = new ChalkTest();
chalkTest.test();
console.log('################ Chalk test Done ##############');

console.log('################ CLI Demo Begins ##############');
var cli = new InquirerCli();
cli.start();
