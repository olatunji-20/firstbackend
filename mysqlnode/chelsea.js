
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "players"
});

con.connect((err) => {
    if(err) throw err;
    console.log("mysql connection successful...");
});



const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/chelsea.html");

    let sql = "SELECT * FROM squad WHERE jerseyNumber = 19";

    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDD");
        console.log(result[0].surName);
        console.log("DDDDDDDDDDDDDDDDDDDDDSDDDDD");
        console.log(result[0].firstName);

        res.write("<h2>The name of your player is " + result[0].firstName + "-" + result[0].surName + "</h2>");
    res.send();

    });


    
});

app.post("/", (req, res) => {
    
});





app.listen(3000, () => {
    console.log("server activated on port 3000...");
});