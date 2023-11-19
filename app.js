const weatherModule = require('./vaaruni.js');

// picking a location for location-specified functions
const location = 'India';

// getting temperature & weather at all locations
console.log(weatherModule.getWeatherSummary());

// getting current weather and temperature at specified location
console.log(weatherModule.getCurrentWeather(location));

// getting temperature trend at specified location
console.log(weatherModule.checkTemperatureTrend(location));

// getting updated temperature & weather at all locations
// this includes location additions, removals and updates
console.log(weatherModule.getWeatherSummary());

// updating existing location's temperature
const locationn = 'Singapore';
const newTemperature = 21;
console.log(weatherModule.updateTemperature(locationn, newTemperature));

// adding new location with weather condition & temperature
const newLocation = 'Vietnam';
const temperatureAU = 60;
const conditionsAU = 'Sunny';
console.log(weatherModule.addLocation(newLocation, temperatureAU, conditionsAU));

// removing existing location, temperature and condition
const newLocationn = 'France';
console.log(weatherModule.removeLocation(newLocationn));
console.log(weatherModule.getWeatherSummary());

// getting average temperature from all the current locations
console.log(weatherModule.getAverageTemperature());

// comparing location 1 & location 2's difference in temperature and conditions
const location2 = 'Japan';
console.log(weatherModule.compareWeather(location, location2));