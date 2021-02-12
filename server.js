const { response } = require("express");
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

// server.get("/", function(req, res){
//     return res.send("hi!")
// })

server.get("/", function (req, res) {
  return res.render("sobre", { receitas: receitas });
});

server.get("/receitas", function (req, res) {
  return res.render("receitas", { receitas: receitas });
});

server.get("/receita", function (req, res) {
  //pegar a id
  const id = req.query.id;

  const receita = receitas.find(function (receita) {
    if (receita.id == id) {
      return true;
    }
  });

  if (!receita) {
    return res.send("Receita não encontrada!");
  }
  return res.render("receita", { receita });
});

server.listen(5000, function () {
  console.log("Server is running!");
});
