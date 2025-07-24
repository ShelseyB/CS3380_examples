import http from "http";
import fs from "fs";
import { parse } from "querystring";

const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    console.log(req.method, req.url, req.body);

    // Handle different routes
    if (req.url === "/" && req.method === "GET") {
        // res.end("Welcome to CS 3380!");
        const html = `<!DOCTYPE html>
<html>
<head>
  <title>My Local Page</title>
</head>
<body>
  <h1>Hello from Local Server!</h1>
</body>
</html>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    }
    else if (req.url === "/" && req.method === "POST") {
        let body = "";
        // Collect the data chunks
        req.on('data', chunk => {
            console.log("chunk", chunk);
            body += chunk;
        });
    
        // Once the data is fully received
        req.on('end', () => {
            // Log the raw body (for debugging)
            console.log('Received body:', body);
    
            // Handle Content-Type: application/x-www-form-urlencoded
            if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
                const parsedData = querystring.parse(body); // Parse the URL-encoded form data
                console.log('Parsed form data:', parsedData);
            }
    
            // Handle Content-Type: text/plain
            else if (req.headers['content-type'] === 'text/plain') {
                console.log('Plain text data:', body);
            }

            else if (req.headers['content-type'] === "application/json") {
                let parsedData = JSON.parse(body);
                console.log("parsed json", parsedData);
            }
    
            // Send a response back to the client
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(JSON.stringify({msg: 'Data received successfully'}));
        });
    }
    else if (req.url === "/about") {
        res.end("CS 3380 is JavaScript Programming");
    } else if (req.url == "/contact") {
        res.end("Please don't try to contact us")
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port", 3000);
})

