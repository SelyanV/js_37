const weather = require('weather-js');

module.exports.temperature = function temperature(city_name, cb) {
    weather.find({search: city_name, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        cb(result);
    });
};
