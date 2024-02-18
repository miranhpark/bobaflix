import { Router } from 'express';
import controller from '../controllers/controllers';


export function indexRouter() {
    const router = Router();

    /* GET default home page */
    router.get('/', function (req, res, next) {
        res.render('index', { title: 'Express' });
    });
}

export function apiRouter() {
    const router = Router();

    /* GET default home page */
    router.get('/', function (req, res, next) {
        res.render('index', { title: 'Express' });
    });
}
