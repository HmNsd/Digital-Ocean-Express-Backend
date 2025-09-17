import express from "express";
import 'dotenv/config'
// for logging libraries
import logger from "./logger.js";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

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

const morganFormat = ":method :url :status :response-time ms";

// app.use should be after "const app = express();"
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);


// CRUD Operations
app.use(express.json());

let brewData = [];
let nextId = 1;

// add a new brew
app.post("/brews", (req, res) => {
  logger.info("A post request is made to add a new Brew")
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
  logger.warn("A Brew is updated to brewData DB")
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
  logger.warn("A Brew is deleted from brewData DB")
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
