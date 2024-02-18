import { Router } from 'express';

const router = Router();

/* GET default home page */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

