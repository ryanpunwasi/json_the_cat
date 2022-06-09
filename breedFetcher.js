const request = require("request");


const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, resp, body) => {
    try {
      if (!err) {
        const data = JSON.parse(body);
        if (data.length) {
          callback(null, data[0].description);
        } else {
          callback('No breed with that name was found.', null);
        }
      }  else if (err) {
        callback(err, null);
      }
    } catch (e) {
      callback(e, null);
    }
  });
};

module.exports = { fetchBreedDescription };
