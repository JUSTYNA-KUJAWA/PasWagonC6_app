const express = require("express");
const router = express.Router();

router.get("/calculateDisselUsageForDistance", (req, res) => {
  if (
    !req.query.distance ||
    !req.query.yearOfProduction ||
    !req.query.fuelUsagePer100KM
  ) {
    res.status(400);
    throw new Error(
      "The fields distance and year of productiona and fuelUsagePer100KM are required"
    );
  }

  const distance = Number(req.query.distance);
  const yearOfProduction = Number(req.query.yearOfProduction);
  const fuelUsagePer100KM = Number(req.query.fuelUsagePer100KM);

  const PasWagonFuelUsage = ((distance * fuelUsagePer100KM) / 100).toString();

  res.send(PasWagonFuelUsage);
});

module.exports = router;
