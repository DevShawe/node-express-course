const express = require("express");
const app = express();
app.listen(800, function () {
  console.log("app is running");
});

const mockUp = [{ name: "Mark" }, { name: "Jill" }];

app.get("/", function (req, res) {
  res.json({
    success: true,
    data: mockUp,
  });
});

app.get("/user/:id", function (req, res) {
  console.log(req.params.id);

  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});
