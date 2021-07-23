

const  express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/form.html", function() {
        console.log("we don comot!")
    });
})

app.post("/", function(req, res) {
    firstNum = req.body.num1;
    secName = req.body.num2;

    res.send("our first number is " + firstNum +" " + "while our second nmber is " + secName)
})

app.listen(3000, function() {
    console.log("we're moving!");
})