const express = require("express");
const cors = require("cors");

const calculateDisselUsageForDistanceRoutes = require("./routes/calculateDisselUsageForDistance.routes");
const probabilityOfUnitInjectorFailRoutes = require("./routes/probabilityOfUnitInjectorFail.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", calculateDisselUsageForDistanceRoutes);
app.use("/api", probabilityOfUnitInjectorFailRoutes);

app.use((req, res) => {
  res.status(404).send({ message: "Not found..." });
});

const server = app.listen("8000", () => {
  console.log("Server is running on port: 8000");
});

module.exports = server;
