import { suma, multiplicacion } from "./modulos/controller.js";
import chalk from "chalk";
const sum = suma(4, 5);
console.log(chalk.green(sum));
const mul = multiplicacion(1, 2);
console.log(chalk.green(mul));
