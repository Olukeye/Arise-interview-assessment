export const postFilter = function(req:any, file: any, cb:any) {
    // Accept only images
    if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only supports these files!';
        return cb(new Error('Only supports these files!'), false);
    }
    cb(null, true);
};