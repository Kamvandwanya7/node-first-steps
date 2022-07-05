


import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js';

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage);


import figlet from 'figlet';

figlet('Hello Xola!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgBlue.black(data);
    console.log(styledMessage);
});



// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));