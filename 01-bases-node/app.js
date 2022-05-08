
import { createTableMultiplicar } from './helpers/createTableMultiplicar.js';
import yargs from 'yargs';
const command = yargs(process.argv.slice(2)).argv

console.log(command.base)

// createTableMultiplicar(5)


