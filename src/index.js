const express = require("express");
const app = express();

// dicinedo para el express que voy usar view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/:nome/:lang?", (req, res) => {
    var nome = req.params.nome;
    if (req.params.lang) {
        var lang = req.params.lang;
    } else lang = "py"
    
    
    res.render("index", {
        nome: nome,
        lang: lang,
        lista: "lista de dados"
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
