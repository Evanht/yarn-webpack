// import { capitalize } from './helpers';
import { camelCase } from 'lodash'

const greetUser = (name) => {
  debugger
  console.log(`Hello ${camelCase(name)}`);
};

greetUser("evan thomas");
