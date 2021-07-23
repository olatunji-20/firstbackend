


const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/servertestt.html");
});

app.post("/", function(req,res) {
    var wgt = req.body.weight;
    var hgt = req.body.height;

    res.send("<h1>your height is </h1> " + wgt + hgt);
})

app.listen(9999, function (){
    console.log("server activated on port 9999!");
});