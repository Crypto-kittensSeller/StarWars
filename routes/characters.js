const express = require('express');
const router = express.Router();
const charConrtoller = require('../database/characterController');

/* GET chars listing. */
router.get('/', async (req, res) => {
  try {
    const chars = await charConrtoller.querySearch(req.query);
    res.render('characters', {
      title: 'Star Wars',
      header: 'Characters List',
      chars: chars
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
