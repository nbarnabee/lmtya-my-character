const express = require("express");
const app = express();
const PORT = 5000;
const charList = require("./charList");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get("/api", (req, res) => {
  console.log(charList.characters);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});