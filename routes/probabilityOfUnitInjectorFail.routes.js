const express = require("express");
const router = express.Router();

router.get("/probabilityOfUnitInjectorFail", (req, res) => {
  if (!req.query.VIN) {
    res.status(400);
    throw new Error(" VIN is required");
  }

  const probabilityOfInjectorFail = (
    Math.floor(Math.random() * 101) / 100
  ).toString();

  res.send(probabilityOfInjectorFail);
});

module.exports = router;
