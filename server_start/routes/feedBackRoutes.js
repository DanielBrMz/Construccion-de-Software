const express = require('express');
const router = express.Router();
const feedBackController = require('../controllers/feedBackController');

router.get('/:id', feedBackController.getFeedBackById); 
router.post('/:user_id', feedBackController.createFeedBack);

module.exports = router;
