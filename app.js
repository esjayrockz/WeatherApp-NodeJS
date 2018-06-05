const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=8%20Lake%20Range%20Kolkata',
  json: true
},(error, response, body) => {
  console.log(`Lattitude : ${body.results[0].geometry.location.lat}, Longitude : ${body.results[0].geometry.location.lng}`);
});
