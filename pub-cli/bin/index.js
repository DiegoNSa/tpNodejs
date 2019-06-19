#!/usr/bin/env node
var program = require('commander');

program.version('1.0.0')
  .option('-l, --list', 'Get the pubs list')
  .option('-o, --open', 'Get the open pubs list')
  .parse(process.argv);

if (program.list) {
  require('../src/main').getListPub().forEach((item) => {
    console.log(item.name);
  });
}
if (program.open) {
  require('../src/main').getOpenPub().forEach((item) => {
    console.log(item.name);
  });
}
