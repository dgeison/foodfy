const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
// const receitas = require("./data");

server.use(express.static("public"));

server.set("view engine", "html");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});


// server.get("/", function(req, res){
//     return res.send("hi!")
// })

server.get("/", function(req, res){
    return res.render("index")
})

server.get("/receitas", function(req, res){
  return res.render("receitas")
})



server.listen(5000, function(){
  console.log("Server is running!")
})