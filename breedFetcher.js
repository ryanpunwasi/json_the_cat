const request = require("request");
const breed = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, resp, body) => {
  try {
    if (!err) {
      const data = JSON.parse(body);
      if (data.length) {
        console.log(data[0].description);
      } else {
        throw new Error('No breed with that name was found.');
      }
    }  else if (err) {
      throw err;
    }
  } catch (e) {
    console.log(`We were unable to complete your request. See details below:\n${e}`);
  }
  
});