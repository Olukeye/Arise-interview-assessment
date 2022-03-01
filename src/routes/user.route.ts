import {Router} from 'express';
const router = Router();


import {getUsers, getUserById, deleteUser, updateUser} from '../controllers/user.controller';

router.get('/users',getUsers);
router.get('/user/:id',getUserById);
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser);



export default router;