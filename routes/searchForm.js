const express = require('express');
const router = express.Router();
const getOptions = require('../database/getOptions');

/* GET form. */
router.get('/', async (req, res, next) => {
  try {
    const fieldsForOptions =
      'birth_year gender homeworld hair_color skin_color eye_color';
    const options = await getOptions(fieldsForOptions);
    res.render('searchForm', {
      title: 'Star Wars',
      header: 'Find characters',
      options
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
