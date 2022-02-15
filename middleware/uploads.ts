import utils from 'util';
import { Request } from 'express';
import multer from 'multer';
import { customAlphabet } from 'nanoid'
import path from 'path';
import { postFilter } from '../utils/image-utils';
const maxSize = 2 * 102400 ;


export const nanoid = customAlphabet("abcdefghijjlmnopqrstuvwxyz", 10)


let storage = multer.diskStorage({
    destination: (req:Request, file, cb) => {
        cb(null, __basedir + '/resources/static/assets/uploads/');
    },
    filename:(req, File, cb) => {
        const ext = path.extname(File.originalname)
        const fileName =`post_${nanoid()}${Date.now()}${ext}`
        cb(null, fileName);
    }
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: postFilter,
}).single('file');

let uploadFileMiddleware = utils.promisify(uploadFile);
export default uploadFileMiddleware;