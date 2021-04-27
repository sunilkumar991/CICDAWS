const http = require('http');

var server  = http.createServer((req, res)=>{
    res.end('Welcome from sunil');

});

server.listen(8010, "127.0.0.1", ()=>{
    console.log("server listing at 8010");
});