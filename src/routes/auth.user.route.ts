import {Router} from 'express';
const router = Router();



import {Register } from '../controllers/auth.user.controller';



router.post('/register', Register);


export default router;