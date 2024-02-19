import { Router } from 'express';
import controller from '../controllers/controllers';

const router = Router();

/* GET Yelp API query */
router.post('/yelp', controller.getData);

module.exports = router;