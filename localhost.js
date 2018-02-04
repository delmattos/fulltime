var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8040, function(){
  console.log('Server running on localhost:8040...');
});