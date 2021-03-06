const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

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

app.post("/login", function (req, res) {
  console.log(req.params);
  const username = req.body.username;
  const password = req.body.password;
  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";
  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match!",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});
