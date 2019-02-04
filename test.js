var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('test.txt', 'Hello test content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
