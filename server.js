const express = require("express");
const app = express();
const port = 8080;
app.set("view engine", "ejs");

app.get("/", function(req, res, next) {
  res.render("index.ejs");
});
app.get("/about", function(req, res, next) {
  res.render("about.ejs");
});
app.get("/cv", function(req, res, next) {
  res.render("cv.ejs");
});
app.get("/cv1", function(req, res, next) {
  res.render("cv1.ejs");
});
app.get("/cv2", function(req, res, next) {
  res.render("cv2.ejs");
});
app.get("/cv3", function(req, res, next) {
  res.render("cv3.ejs");
});

app.listen(port, () => console.log(`Example app listening on port 3000!`));
