const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>FALANA SHERIFF OLATUNJI<h1>")
});

app.listen(4000, function() {
    console.log("server created on port 4000!")
});