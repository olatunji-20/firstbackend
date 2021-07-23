

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/sunday.html");
});

app.post("/", function(req, res) {

    var sher = req.body.fiat;
    var olat = req.body.crypto;
    var client = req.body.cliente;
    
    console.log(sher);
    console.log(olat);

    res.send("<h1>You selected " + sher + " and " + olat + ". Also, the name of the client is " + client + ".</h1>");
    

/*

            request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body) {
                console.log(response.statusCode);
                console.log(body);

            

                var data = JSON.parse(body);


                var price = data.ask;


                res.write("<h2>The current value of bitcoin is " + price +".</h2>");
                res.write("<h2>The current value of bitcoin is " + price +".</h2>");
                res.send();


            });*/
  

        });

app.listen(3000, function() {
    console.log("server running on port 3000!");
}); 