import { Router } from 'express';
import SampleController from '../controllers/controllers';

const router = Router();

router.get('/sample', SampleController.getSampleData);
router.get('/joke', SampleController.getJokeData);

export default router;