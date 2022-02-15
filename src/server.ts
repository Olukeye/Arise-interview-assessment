import express from "express";
import dotenv from 'dotenv';
// import services from './services/index';
import userRoute from './routes/user.route';
const app = express();

dotenv.config();


app.use(express.json());


const { PORT, PGHOST } = process.env;

app.use(userRoute)
// app.use('/', services);

app.listen(PORT, () => {
  return console.log(`server is running on http://${PGHOST}:${PORT}`); 
});