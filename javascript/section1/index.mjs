


import chalk from 'chalk';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.yellow('Enter Name: '), (name) => {
  console.log(chalk.blue(`Hello my Name is, ${name}!`));
  rl.close();
});
