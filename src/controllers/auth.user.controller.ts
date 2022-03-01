import {Request, Response} from 'express';
import {pool} from "../db/database";
import {QueryResult} from 'pg';

export const Register = async(req:Request, res:Response): Promise<Response>=> {
    try{
      const {email, password, full_name} = req.body;
      // check for exixting user
        pool.query('SELECT p FROM person  WHERE p.email = $1',[email], (results) => {
         if(results.rows.length) {
           return res.send("User Already Exist!")
         }
      })

      const response: QueryResult = await pool.query('INSERT INTO person (email, password, full_name) VALUES ($1, $2, $3)', [email, password, full_name]);
      return res.status(201).json({msg: "User created successfully!!"})
    } catch(e) {
        return res.status(500).json("Internal Server Error")
    }
  }