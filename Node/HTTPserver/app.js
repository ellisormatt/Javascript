const http = require('http');
const arr = [1,2,3,4,5,6,{'asd':123,'qwe':456789}];
let requestListener = (request,response) => {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello World!\n');
    response.write('Hello World!\n');
    response.write('Hello World!\n');
    response.write('Hello World!\n');
    response.write('Hello World!\n');
    response.write('Hello World!\n');
    response.write('Hello World!\n');
    //response.write(arr[5]);
    try {
        response.write(arr[5]);
    } catch (error) {
        console.log(error);
    }
    response.end();
};

const server = http.createServer(requestListener);

server.listen(3000);