const http = require('http');
const fs = require('fs');

const port = 8081;

const server = http.createServer((req, res) => {
    let fileName = "";

    switch (req.url) {
        case "/":
            fileName = "./index.html"
            break;
        case "/about":
            fileName = "./about.html"
            break;
        case "/contact":
            fileName = "./contact.html"
            break;
    }

    fs.readFile(fileName, (err, result) => {
        if (!err) {
            res.end(result);
        }
    })
}).listen(port, (error) => {
    if (error) {
        console.log('server not started.')
        return false;
    }
    console.log(`server started on port no.${port}`)
});
