const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/contacts", require("./controllers/contacts"));

app.get("/api", (req, res) => {
  res.status(404).json({ message: "No resource specified." });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
