

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected");

    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Database created");
    })
});




var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': "text/html"});
    res.write("knfkg");
    res.end();
}).listen(2000);








const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    var sjf = req.body.frg
})

app.listen(3000);












var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "ypurpassword"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected!");

    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("result: " + result);
    });
});


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected!");

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("result: " + result);
    });
});











var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected!");

    con.query("CREATE DATABASE mydb", function(err, result) {
        if(err) throw err;
        console.log("result " + result);
    });
});











































