const roleModel = require("../../models/role.model");

module.exports.index = async (req, res) => {
  const roles = await roleModel.find();
  if (roles) {
    
    res.json({
      code: 200,
      message: "Lấy danh sách quyền người dùng thành công",
      roles
    });
    return;
  }
  res.json({
    code: 400,
    message: "Lấy danh sách quyền người dùng thất bại",
  });
};

module.exports.create = async (req, res) => {
  const { role_name, description } = req.body;

  const roleExist = await roleModel.findOne({
    role_name
  });
  if(roleExist){
    res.status(400).json({
      code: 200,
      message: "Quyền này đã tồn tại"
    });
    return;
  }
  if (role_name && description) {
    const newRole = new roleModel({
      role_name,
      description,
    });
    await newRole.save();
    res.json({
      code: 200,
      messsage: "Tạo mới quyền thành công",
    });
    return;
  }

  res.json({
    code: 200,
    message: "Tạo mới quyền thất bại",
  });
};
