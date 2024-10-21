const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");

app.use(morgan("tiny"));

// register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.route("/submit-form").post((req, res) => {
  res.send("Success!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is live on PORT: ${PORT}`);
});
