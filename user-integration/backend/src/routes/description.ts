import express from 'express';
import descriptionController from '../controllers/description';

const router = express.Router();

router.get('/:id', descriptionController.getDescriptionByid);
router.post('/:id', descriptionController.createDescription);

export default router;