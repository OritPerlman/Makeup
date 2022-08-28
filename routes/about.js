const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/set-meeting => GET
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'about.html'));
});

// /admin/add-product => POST
router.post('/', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
