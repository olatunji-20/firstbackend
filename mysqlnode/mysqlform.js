

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
    if(err) throw err;
    console.log("mysql database connection successful...");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/mysqlform.html");
});


app.post("/", function(req,res) {

    // res.send(req.body);
    
    let sql = "INSERT INTO userProfile VALUES ('" + 0 + "', '" + req.body.firstName + "', '" + req.body.surName + "', '" + req.body.email + "', '" + req.body.password + "', '" + req.body.state + "')";

    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("no error in sql command...");
        res.send("<h1>Your details has been submitted successfully....</h1>");
    });
});






// let sql = "SELECT * FROM userProfile WHERE id=3";

// con.query(sql, function(err, result) {
//     if(err) throw err;
//     console.log("sql command 2 successful....");
//     console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
//     console.log(result);
//     console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
//     console.log(result[0].email);

//      var sheri = result[0].email;
     
    
    
// });


app.listen(3000, function() {
    console.log("server running on port 3000....");
});

