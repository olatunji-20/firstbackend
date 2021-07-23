


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/newcrypt.html");
});

app.post("/", function(req, res) {


    var cryptoCurrency = req.body.crypto;
    var fiatCurrency = req.body.fiat;


    var baseUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

    var fullUrl = baseUrl + cryptoCurrency + fiatCurrency;          //console.log(fullurl)
           
    request(fullUrl, function(error, response, body) {


    var data = JSON.parse(body);


        console.log(response.statusCode);
        console.log(body);
        

            console.log(cryptoCurrency);
            console.log(fiatCurrency);

        res.write("<h1>The current value of " + cryptoCurrency + " in " + fiatCurrency + " is " + data.last + ".")
        res.write("<h3>The current value of a bitcoin is " + data.last + "</h3>");
        res.send();
    });    
});

app.listen(4000, function() {
    console.log("server don dey run for port 4000!");
});
