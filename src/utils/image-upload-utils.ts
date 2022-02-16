import { NextFunction, Request, Response } from "express";
import uploadFileMiddleware from "../middleware/uploads";
import { BadRequestError } from "../errors";
import { uploadFile } from  "../middleware/aws-s3"


export const postUpload = async (req: Request, res: Response, next: NextFunction) => {
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    await uploadFileMiddleware(req, res)
    const {caption, text} = req.body
    const file = req.file
    const fileName = req.file?.filename

    const payload: {
        caption?: string
        img_url?: string
        text?: string
    } = {}

    if (caption) {
        payload.caption = caption
        
        if (!caption && !fileName) throw new BadRequestError("please provide an image or caption")
    }

    if (text) payload.text = text
        

    if (file) {
        payload.img_url = directoryPath + fileName
        await uploadFile(file)
    }
    
    return payload
};

