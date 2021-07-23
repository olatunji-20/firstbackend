
const express = require('express');

const bodyParser = require('body-parser');

var mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "players"
});

con.connect( (err) => {
    if(err) throw err;
    console.log("connection to database successful...");
});


/*let sql = "CREATE TABLE user2(id INT, firstName VARCHAR(255), surName VARCHAR(255), email VARCHAR(255), phoneNO INT, dateOB INT, password VARCHAR(255), state VARCHAR(255))";

    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log("query success...");
    });  */


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/mysqlform.html");
});

app.post("/", (req, res) => {
    console.log(req.body);

    let sql = "DROP TABLE user2";

    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log("sql insert good to go...");
    });



});






app.listen(3000, () => {
    console.log("server running on port 3000...");
});