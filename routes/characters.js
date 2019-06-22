const express = require('express');
const router = express.Router();
const url = require('url');
const charConrtoller = require('../database/characterController');
const pagination = require('../utilities/pagination');

/* GET chars listing. */
router.get('/:page', async (req, res) => {
  try {
    const parsedUrl = url.parse(req.url);
    const chars = await charConrtoller.querySearch(req.query, req.params.page);
    const pages = pagination(chars.page, chars.totalPages);

    res.render('characters', {
      title: 'Star Wars',
      header: 'Characters List',
      chars: chars.docs,
      page_count: chars.totalPages,
      currentPage: req.params.page,
      pages: pages,
      queryString: parsedUrl.query
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
