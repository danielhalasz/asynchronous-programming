'use strict';
debugger;

// require built-in dependencies
const fs = require('fs');
const path = require('path');
// require local dependencies
const labeledLogger = require('../../labeled-logger');

// declare constants
const FILE_PATH = path.join(__dirname, 'file.txt');

// --- main script ---
const log = labeledLogger(Date.now());

log(0, 'begin!');

<<<<<<< HEAD
=======
// sync write - phase 1
fs.writeFileSync(FILE_PATH, '111111111111');

log(1, 'first write is finished');

// async write - phase 2 (after the callstack is clear)
>>>>>>> 019ae303cfd60674674bb6612ebc0ab3a725e6c5
const fsWriteCallback = (err) => {
  if (err) {
    log(3, 'async --', err);
    return;
  }

  log(3, 'async -- second write is finished');
};
<<<<<<< HEAD

fs.writeFile(FILE_PATH, '111', fsWriteCallback);

fs.writeFileSync(FILE_PATH, '222');

log(1, 'first write is finished');
=======
fs.writeFile(FILE_PATH, '222222222222', fsWriteCallback);
>>>>>>> 019ae303cfd60674674bb6612ebc0ab3a725e6c5

// sync read file -  phase 1
const firstRead = fs.readFileSync(FILE_PATH, 'utf-8');

log(2, firstRead);

// async read - phase 2 (after callstack)
const fsReadCallback = (err, secondRead) => {
  if (err) {
    log(4, 'async --', err);
    return;
  }

  log(4, 'async --', secondRead);
};
fs.readFile(FILE_PATH, 'utf-8', fsReadCallback);

log('... the callstack is empty ...');
