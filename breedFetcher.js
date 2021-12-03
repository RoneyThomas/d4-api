const request = require('request');

const breedSearchEndpoint = "https://api.thecatapi.com/v1/breeds/search/?q=";

const searchBreed = (breed) => {
  request(breedSearchEndpoint.concat(breed), (error, response, body) => {
    if (!error) {
      if (!body.length) {
        const data = JSON.parse(body);
        console.log(data[0].description);
      } else {
        console.log("Breed not found");
      }
    } else {
      console.log('Error fetching breed', error);
    }
  });
};

searchBreed(process.argv[2]);