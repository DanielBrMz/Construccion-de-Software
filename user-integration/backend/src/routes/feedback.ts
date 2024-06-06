import express from 'express';
import feedbackController from '../controllers/feedback';

const router = express.Router();

router.get('/:id', feedbackController.getFeedbackById);
router.post('/:id', feedbackController.createFeedback);

export default router;