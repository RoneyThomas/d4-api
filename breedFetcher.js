const request = require('request');

const breedSearchEndpoint = "https://api.thecatapi.com/v1/breeds/search/?q=";

const fetchBreedDescription = (breedName, callback) => {
  request(breedSearchEndpoint.concat(breedName), (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(error, data[0].description);
      } else {
        callback('Breed not found', null);
      }
    } else {
      console.log('Error fetching breed', error);
      callback(error, 'Error fetching breed');
    }
  });
};

module.exports = { fetchBreedDescription };