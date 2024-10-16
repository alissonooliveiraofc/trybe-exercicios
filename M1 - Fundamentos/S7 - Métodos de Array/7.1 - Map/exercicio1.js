const temperaturesCelsius = [23, 10, 32, 21, 47];

const toCelsius = (array) => array.map((temp) => (temp * 9) / 5 + 32);

console.log(toCelsius(temperaturesCelsius));
