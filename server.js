const express = require('express');
const app = express();

app.get("/",function(req, res) {
  res.send("<h1>Hello World!</h1>");
})

app.get("/contact", function(req, res) {
  res.send("Contact me at sriurs@saimail.com");
})

app.get("/hobbies", function(req, res) {
  res.send("  <ul><li>Badminton</li><li>Carroms</li><li>Cooking</li></ul>")
})

app.listen(3000, function() {
  console.log("Server started on port: 3000");
})