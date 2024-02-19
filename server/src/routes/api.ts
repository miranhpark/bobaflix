import { Router } from 'express';
import { yelpController } from '../controllers/controllers';

const router = Router();

/* GET Yelp API query */
router.post('/yelp', yelpController);

module.exports = router;