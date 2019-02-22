const express = require("express"); // this imports something, in this case express.
const fs = require("fs");
const PORT = 3300;

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./Library/characters.json", "utf8", (err, charactersData) => {
    if (err) {
      res.json({ message: "WRONG! Go back" });
    }
    let library = JSON.parse(charactersData);
    res.json(library);
  });
});

app.get("/characters/:name", function(req, res) {
  let name = req.params.name;
  fs.readFile("./Library/characters.json", "utf8", (err, charactersData) => {
    if (err) {
      res.json({ message: "WRONG! Go back" });
    }
    let library = JSON.parse(charactersData);
    res.json(library[name]);
    console.log([name]);
  });
  console.log(name);
});

app.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
});

// 2. write a get route '/characters' which accepts a name as an extra url param and returns a specific character based on the parameter
