const axios = require('axios');
const charController = require('./characterController');

async function updateDB() {
  try {
    let nextData = true;
    let url = 'http://swapi.co/api/people';
    while (nextData) {
      const res = await axios.get(url);

      const chunkOfChars = res.data.results.map(async char => {
        if (char.homeworld) {
          const planet = await axios.get(char.homeworld);
          char.homeworld = planet.data.name;
        }
        await charController.addCharacter(char);
      });

      Promise.all(chunkOfChars)
        .then(() => {
          console.log('Chunk of characters received and added to database');
        })
        .catch(err => console.log(err));

      if (res.data.next) {
        url = res.data.next;
      } else {
        nextData = false;
      }
    }
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = updateDB;
