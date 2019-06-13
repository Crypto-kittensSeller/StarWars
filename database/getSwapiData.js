const axios = require('axios');
const charController = require('./characterMethods');

async function getData() {
  try {
    let nextData = true;
    let url = 'http://swapi.co/api/people';
    while (nextData) {
      const res = await axios.get(url);

      for (char of res.data.results) {
        try {
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

module.exports = getData;
