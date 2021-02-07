const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const receitas = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});


server.get("/", function(req, res){
    
})

server.get("/recipes/:index", function (req, res) {
    const recipes = [...]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    console.log(recipes[recipeIndex]);
  })