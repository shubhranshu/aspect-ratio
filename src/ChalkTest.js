import Chalk from 'chalk';
class ChalkTest {
  test() {
    const log = console.log;

    // Combine styled and normal strings
    log(Chalk.blue('Hello') + ' World' + Chalk.red('!'));

    // Compose multiple styles using the chainable API
    log(Chalk.blue.bgRed.bold('Hello world!'));

    // Pass in multiple arguments
    log(Chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

    // Nest styles
    log(Chalk.red('Hello', Chalk.underline.bgBlue('world') + '!'));

    // Nest styles of the same type even (color, underline, background)
    log(
      Chalk.green(
        'I am a green line ' + Chalk.blue.underline.bold('with a blue substring') + ' that becomes green again!'
      )
    );

    // ES2015 template literal
    log(`
CPU: ${Chalk.red('90%')}
RAM: ${Chalk.green('40%')}
DISK: ${Chalk.yellow('70%')}
`);

    // // ES2015 tagged template literal
    // log(Chalk`
    // CPU: {red ${cpu.totalPercent}%}
    // RAM: {green ${(ram.used / ram.total) * 100}%}
    // DISK: {rgb(255,131,0) ${(disk.used / disk.total) * 100}%}
    // `);

    // Use RGB colors in terminal emulators that support it.
    log(Chalk.keyword('orange')('Yay for orange colored text!'));
    log(Chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
    log(Chalk.hex('#DEADED').bold('Bold gray!'));
  }
}

export { ChalkTest };
