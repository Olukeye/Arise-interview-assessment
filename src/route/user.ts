import {Router} from 'express';
const router = Router();


router.get('/testing', (req, res) => res.send("Hello world"))



export default router;