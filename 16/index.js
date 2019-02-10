var weather = require('./script');
const clc = require('cli-color');
const argv = require('yargs').argv;

/**
 * Функция принимает название города через терминал --city_name=name
 * return temperature, date, city_name
 */
weather.temperature(argv.city_name, function (result) {
    console.log(clc.yellow('Температура: ') + clc.green(Math.floor(result[0].current.temperature) + ' C'));
    console.log(clc.yellow('Дата: ') + clc.green(result[0].current.date));
    console.log(clc.yellow('Город: ') + clc.green(result[0].location.name));
});