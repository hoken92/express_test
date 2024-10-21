const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");

// Morgan middleware
app.use(morgan("tiny"));
app.use(express.static("./assets"));

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

app.get("/download-img", (req, res) => {
  res.download("./assets/images/IMG_1557.JPG");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is live on PORT: ${PORT}`);
});
