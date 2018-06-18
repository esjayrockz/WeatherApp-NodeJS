const request = require('request');

const getWeather = () => {
  request({
    url: `https://api.darksky.net/forecast/9a3deb85a259ca7e203c999c83050c45/22.5107756,88.3479967`,
    json: true
  },(error, response, body) => {
    if(!error && response.statusCode === 200){
    console.log(`The temparature of this location is ${body.currently.temperature} F and ${((body.currently.temperature-32)*(5/9)).toFixed(2)} C`);
    }
    else{
    console.log('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = { getWeather };
