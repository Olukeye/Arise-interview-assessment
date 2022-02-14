import express from "express";
import dotenv from 'dotenv';
// import services from './services/index';
import userRoute from './route/user';


const app = express();

dotenv.config();


app.use(express.json());

const { PORT, PGHOST } = process.env;

app.use('/api/v1', userRoute)
// app.use('/', services);

app.listen(PORT, () => {
  console.log(`server is running on http://${PGHOST}:${PORT}`); 
});