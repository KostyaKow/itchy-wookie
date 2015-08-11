//104.200.17.165

var bs = require('binaryjs')

var server = bs.BinaryServer({port: 9000});
server.on('connection', function(client){
  client.on('stream', function(stream, meta){
    var file = fs.createWriteStream(meta.file);
    stream.pipe(file);
  });
});
