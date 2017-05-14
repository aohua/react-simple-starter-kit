#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');

const generateComponent = require('./helper/component');
const generateContainer = require('./helper/container');

// file directory
const baseDir = './app/';

// const
const REDUCER = 'reducer';
const COMPONENT = 'component';
const CONTAINER = 'container';

// string helper
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

program
  .command('g <type> <name>')
  .description('To generate modules for your react app, The <type> can be \'component\', \'container\' or \'reducer\' for now.')
  .action((type, name) => {
    const fileType = type.trim().toLowerCase();
    const fileName = (fileType === REDUCER ? name.toLowerCase() : capitalizeFirstLetter(name));
    const dir = `${baseDir}${fileType}s/${fileName}`;
    if (fileType === COMPONENT || fileType === CONTAINER || fileType === REDUCER) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        switch (fileType) {
          case COMPONENT:
            generateComponent(dir, fileName);
            break;
          case CONTAINER:
            generateContainer(dir, fileName);
            break;
          case REDUCER:
            generateComponent(dir, fileName);
            break;
          default:
            break;
        }
      } else {
        console.warn('Has existing file with same name %s under %s', fileName, fileType);
      }
    } else {
      console.warn('Invalid file type %s', fileType);
    }
  });

program
  .command('*')
  .description('Not Found command')
  .action((env) => {
    console.error('Command not found "%s"', env);
  });

program.parse(process.argv);
