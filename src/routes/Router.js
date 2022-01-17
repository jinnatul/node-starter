import { Router } from 'express';
import AuthRouter from './AuthRouter';

const router = Router();

router.use('/auth', AuthRouter);

export default router;