
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "players"
});

con.connect(function(err) {
    if(err) console.log("database connection NOT successful...");
    console.log("Database connection successful...");
});

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/chelsea.html");
});

app.get("/data", function(req, res) {

    var sql = "SELECT * FROM squad WHERE jersey_number=100";

    con.query(sql, function(err, result) {
        if (err) throw err;
        res.json({
            'name' : result[0].firstName,
            'surname' : result[0].surname,
            'jersey_number' : result[0].jersey_number,
        });
    });


});

app.get("/add-player", function(req, res) {

    // req.body()
    var firstName = "Delo";
    var surname = "Martin";
    var jersey_number = 12;

    // var sql = "INSERT INTO squad VALUES (, "+`'${firstName}', '${surname}', ${jersey_number})`;
    var sql = "INSERT INTO squad VALUES (, '" + firstName+ "', '" + surname + "', '" + jersey_number + "')";
    // var sql = "INSERT INTO userProfile VALUES ('" + req.body.id+ "', '" + req.body.firstName + "', '" + req.body.surName + "', '" + req.body.email + "', '" + req.body.password + "', '" + req.body.state + "')";

    // res.send(sql);
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send('Player Transfer Completed');
    });
});



app.listen(2000, function() {
    console.log("server running on port 2000...");
});

