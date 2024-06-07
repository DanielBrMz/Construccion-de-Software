import express from 'express';
import treatmentController from '../controllers/treatment';

const router = express.Router();

router.get('/:id', treatmentController.getTreatmentByid);
router.post('/:id', treatmentController.createTreatment);

export default router;