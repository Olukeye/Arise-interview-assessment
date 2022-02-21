import {Router} from 'express';
const router = Router();

import {getUsers, getUserById, deleteUser} from '../controllers/user.controller';

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.delete('/user/:id', deleteUser);





export default router;