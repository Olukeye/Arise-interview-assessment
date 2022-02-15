import { NextFunction, Request, Response } from "express";
import uploadFileMiddleware from "../middleware/uploads";
import { BadRequestError } from "../errors";


export const postUpload = async (req: Request, res: Response, next: NextFunction) => {
    const directoryPath = __dirname+ "/resources/static/assets/uploads/";
    await uploadFileMiddleware(req, res)
    const {caption, text, postId} = req.body
    const {commentId} = req.params
    const file = req.file
    const fileName = req.file?.filename

    const payload: {
        caption?: string
        img_url?: string
        text?: string
        postId?: number
        commentId?: number
    } = {}

    if (caption) {
        payload.caption = caption
        
        if (!caption && !fileName) throw new BadRequestError("please provide an image or caption")
    }

    if (text) payload.text = text
        
    if (postId) payload.postId = postId as any as number

    if (commentId) payload.commentId = commentId as any as number

    if (file) {
        payload.img_url = directoryPath + fileName
        await uploadFile(file)
    }
    
    return payload
}