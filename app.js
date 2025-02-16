const http = require('http');
const fs = require('fs');

// const express = require('express');
// const multer = require('multer');
// const csv = require('fast-csv');

// const Router = express.Router;

const port = 3000;

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.readFile('helloCharts.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error : File not found')
        } else {
            res.write(data)
        }
        res.end();
    })
});

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong : ' + error);
    }
    else {
        console.log('Server is listening on port ' + port);
    }
})
