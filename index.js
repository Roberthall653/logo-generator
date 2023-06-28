const inquirer = require('inquirer');
const fs = require('fs');
const logoGeneration = require('./logoGeneration.js');
const Validate = require('./lib/text');



const questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'What shape is your logo?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
        },
        {
            type: 'input',
            name: 'text',
            message: 'What text (up to three letters) would you like in your logo?',

        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?',
        }
    ]

function init() {inquirer
    .prompt(questions)
    .then(function(data) {
        console.log(data);
        fs.writeFile("./examples/exampleLogo.svg", logoGeneration(data), function (err)
        {if (err) 
          {console.log(err)
         } else {
            console.log('Your logo has been created!')
          }
        }
        );

    });}

init();