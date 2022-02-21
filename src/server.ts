import express from "express";
import dotenv from 'dotenv';
// import services from './services/index';
import userRoute from './routes/user.route';
import authRoute from './routes/auth.user.route';

const app = express();

dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended: false}))


const { PORT, PGHOST } = process.env;

app.use('/api', authRoute)
app.use('/api', userRoute)
// app.use('/', services);

app.listen(PORT, () => {
  return console.log(`server is running on http://${PGHOST}:${PORT}`); 
});