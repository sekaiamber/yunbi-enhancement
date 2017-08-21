var fs = require('fs');
var path = require('path');
var package = require('../package.json');

var index = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.js')).toString();
index += 'window.YUNBI_ENHANCEMENT = {' +
'  version: "' + package.version + '",' +
'};';

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'index.js'), index);
