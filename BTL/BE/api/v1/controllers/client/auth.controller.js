const userModel = require("../../models/user.model");
const roleModel = require("../../models/role.model");


module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
    password,
  });
  const role = await roleModel.findOne({
    _id: user.role_id,
  });
  if (user) {
    res.json({
      code: 200,
      message: "Đăng nhập thành công",
      user,
      role,
    });
    return;
  }

  res.json({
    code: 200,
    message: "Tài khoản hoặc mật khẩu không đúng",
  });
};


module.exports.register = async (req, res) => {
    const {email,password,username,full_name} = req.body;
    const existEmail = await userModel.findOne({
        email
    });
    if(existEmail){
        res.json({
            code: 400,
            message: "Email đã tồn tại"
        });
        return;
    }
    
    const roleName = await roleModel.findOne({
        role_name: "Người dùng"
    });

    const newUser = new userModel({
        email,
        password,
        username,
        full_name,
        role_id: roleName.id
    });
    await newUser.save();
    res.json({
        code: 200,
        message: "Đăng ký tài khoản thành công"
    })
}