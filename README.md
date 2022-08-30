# PasWagonC6_app

# Tech Stack: Node.JS

## Initializing a project

After cloning the project, install the required packages with the `yarn install` (or `npm install`) command.
Now you can start working, using the prepared `yarn start` (or `npm start`) shuffle.

## Endpoints

# GET api/calculateDisselUsageForDistance

The fields distance, year of production and fuelUsagePer100KM are required. Endpoint calculate the diesel usage per distance given by customer.

http://localhost:8000/api/calculateDisselUsageForDistance?distance=560&yearOfProduction=2000&fuelUsagePer100KM=5

# GET api/probabilityOfUnitInjectorFail

The field VIN is required.
API function that returns a random percentage of the chance that the engine of the car will fail.

http://localhost:8000/api/probabilityOfUnitInjectorFail?VIN=1111

The endpoints has been tested with POSTMAN.
