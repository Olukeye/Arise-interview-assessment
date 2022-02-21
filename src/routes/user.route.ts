import {Router} from 'express';
const router = Router();

import {Register, getUsers, getUserById} from '../controllers/user.controller';

router.get('/users', getUsers);
router.get('/user/:id', getUserById)
router.post('/register', Register);





export default router;