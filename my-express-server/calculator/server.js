/*const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var heightsquared = (height * height);
        var bmi = (weight / heightsquared);

        res.send("your BMI is " + bmi);
})

app.listen(1000);*/










const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    var wt = Number(req.body.weight);
    var ht = Number(req.body.height);

    var bmi = (wt / (ht * ht));

    res.send("Your bmi is " + bmi);
})

app.listen(2000, function() {
    console.log("server running on port 2000!")
});