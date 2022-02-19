import {Router} from 'express';
const router = Router();

import {Register, getUsers} from '../controllers/user.controller';

router.get('/users', getUsers);
router.post('/register', Register);

export default router;