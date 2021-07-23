


const express = require("express");

const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/set.html");
});

app.post("/", function(req, res) {

    var sher = req.body.namer ;
    var olat = req.body.email ;

    res.send("The name of this user is " + sher + " with the email " + olat + ".");
    console.log(sher);
    console.log(olat);
});



app.listen(3000, function() {
    console.log("port activated on port 3000.");
});