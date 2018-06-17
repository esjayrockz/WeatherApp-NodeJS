const request = require('request');

const geocode = (address) => {
  const encodedAddress = encodeURIComponent(address);
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  },(error, response, body) => {

    if(error) {
      console.log('Unable to connect to Google servers!');
    }
    else if(body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address');
    }
    else if(body.status === 'OK') {
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Lattitude : ${body.results[0].geometry.location.lat}, Longitude : ${body.results[0].geometry.location.lng}`);
    }
    else {
    console.log('Please try again');
    }
  });
};

module.exports.geocode = geocode;
