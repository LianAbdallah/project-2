const http = require('http');

const fs = require("fs")


const server = http.createServer((req, res) => {


    //part 1 
    // res.writeHead(200,{"content-type":'text/html'})

    // res.write("hello from the server this is a node js course")

    // res.end(`<h1>hi soso </h1>`)

    // part2 

    fs.readFile('myfile.txt', (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' })
            res.end(" erorr reading the data ")
        } else {
            res.writeHead(200, { "content-type": 'text/plain' })
            res.end(data)
        }
    })


})

const port = 3000
const HOST = '127.0.0.1'  // 127.0.0.1:3000


server.listen(port, host => {
    console.log(`server is started on port #${port} and on localhost ${HOST} `);
})
