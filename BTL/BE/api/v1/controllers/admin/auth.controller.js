const userModel = require("../../models/user.model");
const roleModel = require("../../models/role.model");


module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
    password,
  });
  if (user) {
    const role = await roleModel.findOne({
      _id: user.role_id
    });
    res.json({
      code: 200,
      message: "Đăng nhập thành công",
      user,
      role
    });
    return;
  }

  res.json({
    code: 400,
    message: "Tài khoản hoặc mật khẩu không đúng",
  });
};
