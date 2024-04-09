const express = require("express");
const app = express();

// dicinedo para el express que voy usar view engine
app.set("view engine", "ejs");
// definir la carpeta de esataticos css y img
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/preguntar", (req, res) => {
    res.render("preguntar");
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
