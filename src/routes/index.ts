import {Response, Router} from 'express';
const router: Router = Router();

/* GET home page. */
router.get('/', (_, res: Response) => {
  res.render('index', { title: 'Express' });
});

export default router;
