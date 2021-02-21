const gm = require('gm');
const path = require('path');

const source = path.resolve('./data/1.webp');
const output = path.resolve('./data/1.png');
const output2 = path.resolve('./data/1.jpg');
const output3 = path.resolve('./data/2.png');

gm().command('convert').in(source).write(output, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info("Converted to png");
  }
});

gm(source).write(output2, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('Converted to jpg');
  }
});

gm(source).write(output3, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('Converted to jpg');
  }
});