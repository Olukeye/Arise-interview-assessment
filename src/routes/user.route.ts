import {Router} from 'express';
const router = Router();

import {create} from '../controllers/user.controller';


router.post('/user', create);

export default router;