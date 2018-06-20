const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);

const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address');
  }
  const address = response.data.results[0].formatted_address;
  const lattitude = response.data.results[0].geometry.location.lat;
  const longitude = response.data.results[0].geometry.location.lng;
  console.log(address, lattitude, longitude);
  const weatherUrl = `https://api.darksky.net/forecast/9a3deb85a259ca7e203c999c83050c45/${lattitude},${longitude}`;
  return axios.get(weatherUrl);
}).then((response) => {
  const temparature = response.data.currently.temperature;
  const apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temparature}. It feels like ${apparentTemperature}.`);
}).catch((error) => {
  if(error.code === 'ENOTFOUND') {
    console.log('Unable to connect to API Servers!');
  }
  else {
    console.log(error.message);
  }
});
