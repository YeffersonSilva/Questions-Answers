const express = require("express");
const app = express();

// dicinedo para el express que voy usar view engine
app.set("view engine", "ejs");
// definir la carpeta de esataticos css y img
app.use(express.static("public"));

app.get("/", (req, res) => {
  

});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
