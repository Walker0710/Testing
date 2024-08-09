const express = require('express');
const { getWords, submitGroups } = require('../controllers/gameController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/words', protect, getWords);
router.post('/submit', protect, submitGroups);

module.exports = router;
