

module.exports.validate = (req,res,next) => {
    if(!req.body.email){
        res.json({
            code: 400,
            message: "Email không được để trống"
        });
        return;
    }
    else if(!req.body.password){
        res.json({
            code: 400,
            message: "Mật khẩu không được để trống"
        });
        return;
    }
    
    
    next();
}