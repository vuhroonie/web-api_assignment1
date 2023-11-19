const weatherData = [
    { location: 'Singapore', temperature: 22, conditions: 'Partly Cloudy' },
    { location: 'Malaysia', temperature: 25, conditions: 'Rainy' },
    { location: 'India', temperature: 35, conditions: 'Foggy' },
    { location: 'France', temperature: 37, conditions: 'Partly Sunny' },
    { location: 'Japan', temperature: 44, conditions: 'Stormy' },
    { location: 'Cambodia', temperature: 23, conditions: 'Sunny' },
    { location: 'America', temperature: 78, conditions: 'Rainy' },
    { location: 'Thailand', temperature: 32, conditions: 'Sunny' },
];

module.exports = {
    // get summary of weather conditions in all locations - FUNCTION #1
    getWeatherSummary() {
        const summary = weatherData.map(data => {
            return `${data.location}: ${data.temperature}°C, ${data.conditions}`;
        });
        return 'No weather data available.';
    },

    // get current weather & temperature based on specified location - FUNCTION #2
    getCurrentWeather(location) {
        const weatherInfo = weatherData.find(entry => entry.location === location);
        return weatherInfo
            ? `\nCurrent weather in ${location}: ${weatherInfo.temperature}°C, ${weatherInfo.conditions}.`
            : '\nGetCurrentWeather: Location not found.';
    },

    // check temperature trend for specified location  - FUNCTION #3
    checkTemperatureTrend(location) {
        const weatherInfo = weatherData.find(entry => entry.location === location);
        return weatherInfo
            ? `\nTemperature trend for ${location}: ${weatherInfo.temperature > 20 ? 'Warm' : 'Cool'}.`
            : '\nCheckTemperatureTrend: Location not found.';
    },

    // update current temperature for specified location - FUNCTION #4
    updateTemperature(locationToUpdate, newTemperature) {
        const foundLocation = weatherData.find(entry => entry.location.toLowerCase() === locationToUpdate.toLowerCase());

        if (foundLocation) {
            foundLocation.temperature = newTemperature;
            console.log(foundLocation.location, foundLocation.temperature);
            return `Successfully updated the temperature for ${foundLocation.location} to ${newTemperature}°C.`;
        } else {
            return '\nUpdateTemperature: Location not found.';
        }
    },

    // remove weather locations from main weather list - FUNCTION #5
    removeLocation(newLocationn) {
        weatherData.forEach((country, index) => {
            if (country.location.toLowerCase() === newLocationn.toLowerCase()) {
                console.log(index)
                weatherData.splice(index, 1)
            }
        })
    },

    // get average temperature of all locations in main weather list - FUNCTION #6
    getAverageTemperature() {
        const temperatures = Object.values(weatherData).map(data => data.temperature);

        if (temperatures.length > 0) {
            const averageTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
            return `\nAverage Temperature for all locations: ${averageTemperature.toFixed(2)}°C`;
        } else {
            return '\nGetAverageTemperature: No temperature data available.';
        }
    },

    // add new location to main weather list - FUNCTION #7
    addLocation(newLocation, temperatureAU, conditionsAU) {
        const existingLocation = weatherData.find(country => country.location.toLowerCase() === newLocation.toLowerCase());
        // check if location already exists in main weather list
        if (existingLocation) {
            return `\n${existingLocation.location} already exists in the weather data. Use UpdateTemperature to modify.`;
        }
        // if location doesnt exist in main weather list, add to the list
        weatherData.push({ location: newLocation, temperature: temperatureAU, conditions: conditionsAU });
        return `\nSuccessfully added ${newLocation} to the weather data.`;
    },

    // compare weather conditions between two specified locations - FUNCTION #8
    GetCountryName(countryName) {
        return countryName.toLowerCase();
    },
    compareWeather(location1, location2) {
        let country1;
        let country2;
        weatherData.forEach((country, index) => {
            if (this.GetCountryName(country.location) === location1.toLowerCase()) {
                country1 = country;
            }
            if (this.GetCountryName(country.location) === location2.toLowerCase()) {
                country2 = country;
            }
        })
        if (country1.location.length > 0 && country2.location.length > 0) {
            const temperatureDifference = country1.temperature - country2.temperature;
            const conditionComparison = country1.conditions === country2.conditions
                ? 'Have similar weather conditions'
                : `Have different weather conditions: ${country1.conditions} & ${country2.conditions}`;

            return `\n${location1} and ${location2}:\nTemperature Difference: ${temperatureDifference.toFixed(2)}°C\n${conditionComparison}`;
        } else {
            return 'Either one or both locations not found.';
        }
    }
};
