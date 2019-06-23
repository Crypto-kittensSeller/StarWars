const axios = require('axios');
const charController = require('./characterController');

async function updateDB() {
  try {
    let nextData = true;
    let url = 'http://swapi.co/api/people';
    while (nextData) {
      const res = await axios.get(url);

      for (char of res.data.results) {
        try {
          if (char.homeworld) {
            const planet = await axios.get(char.homeworld);
            char.homeworld = planet.data.name;
          }
          await charController.addCharacter(char);
        } catch (err) {
          console.error(err.message);
        }
      }
      console.log('Chunk of characters received and added to database');
      if (res.data.next) {
        url = res.data.next;
      } else {
        nextData = false;
        console.log('All characters have been received and added to database');
      }
    }
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = updateDB;
