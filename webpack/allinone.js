var fs = require('fs');
var path = require('path');

var allinone = "var _csss = document.createElement('style');";

var css = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.css')).toString();

allinone += "_csss.innerText = '" + css + "';";
allinone += "document.getElementsByTagName('HEAD').item(0).appendChild(_csss);";

var index = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.js')).toString();
allinone += index;


fs.writeFileSync(path.join(__dirname, '..', 'dist', 'all.js'), allinone);
