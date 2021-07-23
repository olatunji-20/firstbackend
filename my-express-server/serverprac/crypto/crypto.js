

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded{extended: true});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/crypto.html");
});


app.listen(5000, function() {
    console.log("server running on port 5000.");
});