import {Router} from 'express';
const router = Router();

import {Register} from '../controllers/user.controller';


router.post('/register', Register);

export default router;