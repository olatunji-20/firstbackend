

const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "players"
});


con.connect(function(err) {
    if(err) console.log("error in connection...");
    console.log("connection successful...");
});



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/mysqlform.html");
});


app.post("/", function(req, res) {
    console.log(req.body);
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");


    let sql = "DROP TABLE user";

    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("users sql command successful...");
        res.send("<h1>All form data inputed into user database...</h1>");
    })


});











app.listen(4000, function() {
    console.log("server running on port 4000...");
});
