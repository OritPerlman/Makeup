const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/set-meeting => GET
router.get('/set-meeting', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'set-meeting.html'));
});

// /admin/add-product => POST
router.post('/set-meeting', (req, res, next) => {
  console.log(req.body);
  res.redirect('/admin/thanks');
});

router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.get('/thanks', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'thanks.html'));
});

module.exports = router;
