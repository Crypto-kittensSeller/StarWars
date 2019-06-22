const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: false
  },
  mass: {
    type: String,
    required: false
  },
  hair_color: {
    type: String,
    required: false
  },
  skin_color: {
    type: String,
    required: false
  },
  eye_color: {
    type: String,
    required: false
  },
  birth_year: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  homeworld: {
    type: String,
    required: false
  },
  films: {
    type: Array,
    required: false
  },
  species: {
    type: Array,
    required: false
  },
  vehicles: {
    type: Array,
    required: false
  },
  starships: {
    type: Array,
    required: false
  },
  created: {
    type: Date,
    required: false
  },
  edited: {
    type: Date,
    required: false
  },
  url: {
    type: String,
    required: false
  }
});

characterSchema.plugin(mongoosePaginate);

module.exports = modelName => mongoose.model(modelName, characterSchema);
