const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 5000;
const charList = require("./charList");
const characters = charList.characters;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get("/api", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const responseArray = [];
  for (let i = 0; i < characters.length; i++) {
  for (let value in req.query) {
    if (value === "class") {
      if (characters[i].class.includes(req.query[value]))
      responseArray.push(characters[i]);
    } else if (value === "level") {
      if (characters[i].level.reduce((a, b) => a+b) === Number(req.query.level))
      responseArray.push(characters[i])
    }
    else if (characters[i][value].toLowerCase() === req.query[value].toLowerCase())
      responseArray.push(characters[i]);
    }
  };
  if (responseArray.length > 0)
  res.json(responseArray);
  else res.json("No matches found.")
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});