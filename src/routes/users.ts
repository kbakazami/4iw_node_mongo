import {Response, Router} from 'express';

const router: Router = Router();

/* GET users listing. */
router.get('/', (_, res: Response) => {
  res.send('respond with a resource');
});

export default router;
