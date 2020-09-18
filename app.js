
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express(); //Creation of the app with express

app.set("view engine", "ejs"); //App set for EJS
app.use(bodyParser.urlencoded({ //App is using bodyparser for the req.body
  extended: true
}));

app.use(express.static("public/"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/Francesco", function(req,res){
  res.render("francesco",)
})

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
