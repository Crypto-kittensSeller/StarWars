const characterSchema = require('./characterModel');

function characterController() {
  const Characters = characterSchema('character');

  const addCharacter = char => {
    const newChar = {
      name: char.name,
      height: char.height,
      mass: char.mass,
      hair_color: char.hair_color,
      skin_color: char.skin_color,
      eye_color: char.eye_color,
      birth_year: char.birth_year,
      gender: char.gender,
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

  const getAllCharacters = (fields = null) => {
    return Characters.find({}, fields).exec();
  };

  const querySearch = (query, page) => {
    const sanitizedQuery = Object.assign({}, query);

    Object.entries(sanitizedQuery).forEach(condition => {
      if (condition[1] === 'all') {
        delete sanitizedQuery[condition[0]];
      }
    });
    const options = {
      page: page || 1,
      limit: 3
    };

    return Characters.paginate(sanitizedQuery, options);
  };

  return { addCharacter, getAllCharacters, querySearch };
}

module.exports = characterController();
