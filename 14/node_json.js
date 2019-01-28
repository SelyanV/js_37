var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR3PiMWuDI11NrGf0-RHKSMqe_WZOETOsYCkqhCX480-Zuuj3Xcsp5jTwTE";

request(url, function (error, response, body) {
    if (!error) {
        // var text = cheerio.load(body);
            // temperature = $("[data-variable='temperature'] .wx-value").html();

            let exchange_rate = JSON.parse(body);

            console.log('Курс валют');
            exchange_rate.forEach(function(values, item) {
              console.log(values.ccy + ' - ' + values.base_ccy + ' Продажа: ' + values.buy + ' Покупка: ' + values.sale);
            });
    } else {
        console.log("Произошла ошибка: " + error);
    }
});
