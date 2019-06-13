const characterSchema = require('./character');

function characterMethods() {
  const Characters = characterSchema('character');

  const addCharacter = char => {
    const newChar = {
      name: char.name,
      height: char.height,
      mass: char.mass,
      hair_color: char.hair_color,
      skin_color: char.skin_color,
      eye_color: char.eye_color,
      birth_year: char.gender,
      gender: char.height,
      homeworld: char.homeworld,
      films: char.films,
      species: char.species,
      vehicles: char.vehicles,
      starships: char.starships,
      created: char.created,
      edited: char.edited,
      url: char.url
    };
    return Characters.findOneAndUpdate(
      { name: newChar.name },
      { $set: newChar },
      { upsert: true, new: true }
    );
  };

  return { addCharacter };
}

module.exports = characterMethods;
