const request = require("request");
request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (err, resp, body) => {
  if (!err && resp.statusCode === 200) {
    console.log(JSON.parse(body)[0].description);
  }
});