

var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    username: "yourusername",
    password: "yourpassword"
});



con.connect(function(err) {
    if(err) throw err;
    console.log("poorly connected!");

    con.query("CREATE TABLE mydatabase(name, age) INSERT INTO mydatabase VALUES(sheriff, 23)", function(err, result){
        if(err) throw err;
        console.log("result " + result);
    });
});