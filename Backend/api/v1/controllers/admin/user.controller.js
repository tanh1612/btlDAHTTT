const userModel = require("../../models/user.model");
const roleModel = require("../../models/role.model");

module.exports.index = async (req, res) => {
  const users = await userModel.find();
  if(!users){
    res.json({
      code: 400,
      message: "Lấy danh sách người dùng không thành công"
    });
    return;
  }
  res.json({
    code: 200,
    message: "Lấy ra danh sách người dùng thành công",
    users
  });
};

module.exports.create = async (req, res) => {
  if (!req.body.role_id) {
    const role = await roleModel.findOne({
      role_name: "Người dùng",
    });
    const infoUser = {
      username: req.body.username,
      password: req.body.password,
      full_name: req.body.full_name,
      email: req.body.email,
      role_id: role.id,
    };
    const newUser = await userModel(infoUser);
    await newUser.save();
  } else {
    const infoUser = {
      username: req.body.username,
      password: req.body.password,
      full_name: req.body.full_name,
      email: req.body.email,
      role_id: req.body.role_id,
    };
    const newUser = await userModel(infoUser);
    await newUser.save();
  }
  res.json({
    code: 200,
    message: "Tạo mới tài khoản thành công",
  });
};
