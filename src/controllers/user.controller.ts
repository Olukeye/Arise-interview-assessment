import {Request, Response} from 'express';
import {pool} from "../db/database";
import {QueryResult} from 'pg';

export const getUsers = async(req: Request, res: Response ): Promise<Response> => {
    try{
        const response:QueryResult = await pool.query('SELECT FROM person');
        return res.status(201).json(response.row)
    } catch(e) {
        return res.status(500).json(e)
    }
}


export const Register = async(req:Request, res:Response) => {
    const {email, password, full_name} = req.body;
    pool.query('INSERT INTO person (email, password, full_name) VALUES ($1, $2, $3)', [email, password, full_name]);
    return res.status(200).json({
        body:{
            user:{
                email,
                full_name
            }
        }
    });
}