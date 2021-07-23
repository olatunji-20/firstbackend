


const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("how far na!")
})

app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.listen(8080, function(){
    console.log("port 8080 now active");
});