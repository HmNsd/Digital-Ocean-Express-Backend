import express from "express";

const app = express();
const port = 8000;

/*
app.get("/", (req, res) => {
  res.send("Hello from Himanshu and his brew!");
});

app.get("/ice-brew", (req, res) => {
  res.send("Which brewing coffee would you prefer?");
});

app.get("/twitter", (req, res) => {
  res.send("Please visit profile: _hmnsd");
});
*/

// CRUD Operations
app.use(express.json());

let brewData = [];
let nextId = 1;

// add a new brew
app.post("/brews", (req, res) => {
  const { name, price } = req.body;
  const newbrew = {
    id: nextId++,
    name,
    price,
  };
  brewData.push(newbrew);
  res.status(201).send(newbrew);
});

// get all brews
app.get("/brews", (req, res) => {
  res.status(200).send(brewData);
});

// get a brew with id
app.get("/brews/:id", (req, res) => {
  const brew = brewData.find((brew) => brew.id === parseInt(req.params.id));
  if (!brew) {
    return res.status(404).send("Brew not found");
  }

  res.status(200).send(brew);
});

// update brew
app.put("/brews/:id", (req, res) => {
  const brew = brewData.find((brew) => brew.id === parseInt(req.params.id));
  if (!brew) {
    return res.status(404).send("brew not found");
  }

  const { name, price } = req.body;
  brew.name = name;
  brew.price = price;

  res.status(200).send(brew);
});

// delete brew
app.delete("/brews/:id", (req, res) => {
  const index = brewData.findIndex((brew) => brew.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("brew not found");
  }

  brewData.splice(index, 1);
  res.status(204).send(`Deleted ${index} brew`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
