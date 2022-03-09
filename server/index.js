const express = require("express");
const data = require("./data.json");

const app = express();
const PORT = 1000;

app.use(express.json());

/* **************************** */
/* *********** READ *********** */
/* **************************** */
app.get("/v1/tiers", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200);
  res.send(data);
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running.");
});
