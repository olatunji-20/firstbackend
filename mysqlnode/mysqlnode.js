

const express = require('express');

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "players"
});

con.connect(function(err) {
    if(err){
        console.log("There is an error in the connection process...");
    }else{
        console.log("mysql connection successful...");
    }
});


const app = express();


app.get("/createdb", function(req, res) {
    
    let sql = "CREATE DATABASE players"

    con.query(sql, function(err, result) {
        if(err){
            throw err;
        }else {
            res.send("database created...");
            console.log(result);
        }
    });
});

app.get("/createtable", function(req, res) {
    let sql = "CREATE TABLE squad(id INT, firstName VARCHAR(255), surName VARCHAR(255), jerseyNumber INT, position VARCHAR(255), PRIMARY KEY (id))";

    con.query(sql, function(err, result) {
        if(err){
            throw err;
        }else {
            console.log(result);
            res.send("table created...");
        }
    });
});


app.get("/insertvalue2", function(req, res) {

    let sql = "INSERT INTO squad VALUES('2', 'antonio', 'rudiger', '2', 'defender')";

    con.query(sql, function(err, result) {
        if(err){
            throw err;
        }else {
            res.send("second values inserted into table...");
            console.log(result);
        }
    });
});

app.get("/insertvalue3", function(req, res) {

    let sql = "INSERT INTO squad VALUES('3', 'marcos', 'alonso', '3', 'defender')";

    con.query(sql, function(err, result) {
        if(err){
            throw err;
        }else {
            res.send("third values inserted into table...");
            console.log(result);
        }
    });
});

app.get("/insertvalue4", function(req, res) {

    let sql = "INSERT INTO squad VALUES('4', 'andreas', 'christensen', '4', 'defender')";

    con.query(sql, function(err, result) {
        if(err){
            throw err;
        }else {
            res.send("fourth values inserted into table...");
            console.log(result);
        }
    });
});

app.get("/viewtable", function(req, res) {

    let sql = "SELECT * FROM squad";

    con.query(sql, function(err, result) {
        if(err){
            throw err;
        }else {
            console.log(result);
            res.send("table being displayed in the console...");
        }
    });
});


    
    var sql = "SELECT * FROM squad";

    con.query(sql, function(err, result) {
        if(err) {
            throw err;
        }else {
            console.log(result);
            console.log("results being displayed in console...")
        }
    });


    var sql = "INSERT INTO squad VALUES ?"

    var values = [
        ['11', 'loftus', 'cheek', '12', 'midfielder'],
        ['12', 'mateo', 'kovacic', '17', 'midfielder'],
        ['13', 'mason', 'mount', '19', 'midfielder'],
        ['14', 'callum', 'hudson-odoi', '20', 'att. midfielder'],
        ['15', 'ben', 'chilwell', '21', 'defender'],
        ['16', 'hakim', 'ziyech', '22', 'att. midfielder'],
        ['17', 'billy', 'gilmour', '23', 'midfielder'],
        ['18', 'reece', 'james', '24', 'defender'],
        ['19', 'cesar', 'azpilicueta', '28', 'defender'],
        ['20', 'kai', 'havertz', '29', 'att. midfielder']
    ];

    con.query(sql, [values], function(err, result) {
        if(err) throw err;
        console.log("last ten values inputed...");
        console.log(result);
    });




    
app.listen(5000, function() {
    console.log("server activated on port 5000...")
})