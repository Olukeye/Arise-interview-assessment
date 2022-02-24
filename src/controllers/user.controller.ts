import {Request, Response} from 'express';
import {pool} from "../db/database";
import {QueryResult} from 'pg';

export const getUsers = async(req: Request, res: Response ): Promise<Response> => {
    try{
        const response:QueryResult = await pool.query('SELECT * FROM person');
        return res.status(201).json(response.rows)
    } catch(e) {
        return res.status(500).json(e)
    }
}

export const getUserById = async(req:Request, res:Response):Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const response:QueryResult = await pool.query('SELECT * FROM person WHERE id= $1', [id]);
        return res.status(201).send(response.rows);
    } catch (e) {
        return res.status(500).json(e)
    }
}

export const updateUser = async(req:Request, res:Response):Promise<Response> => {
    try{
    const id = parseInt(req.params.id);
    const {full_name} = req.body;
    const response:QueryResult = await pool.query('UPDATE person SET full_name = $1 WHERE id = $2', [full_name, id])
    return res.status(201).send(`User ${id} has been updated successfjully!!`)
    }catch(e){
        return res.status(500).send("Server error")
    }
}

export const deleteUser = async(req:Request, res:Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = pool.query('DELETE FROM person WHERE id = $1', [id]);
    return res.status(201).json(`User ${id} is been Deleted!!`)
}