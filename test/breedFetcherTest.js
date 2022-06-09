const { assert } = require('chai');
const { fetchBreedDescription } = require('../breedFetcher');

describe("fetchBreedDescription", () => {
  it('returns a string for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error for a invalid breed, via callback', (done) => {
    fetchBreedDescription('invalid', (err, desc) => {
      assert.equal(err, 'No breed with that name was found.');
      assert.equal(null, desc);

      done();
    });
  });
});