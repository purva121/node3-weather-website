const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&lang=en&appid=fc2f655be4a89117bd014d48e7bb8ae0";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search!", undefined);
    } else {
      //console.log(body.daily[0].temp);
      callback(
        undefined,
        body.daily[0].weather[0].description +
          ". It is currently " +
          body.current.temp +
          " degress out.The high today is " +
          body.daily[0].temp.max +
          " with a low of " +
          body.daily[0].temp.min + "."
      );
    }
  });
};

module.exports = forecast;
