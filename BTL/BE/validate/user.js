module.exports.validate = (req, res, next) => {
  if (!req.body.username || !req.body.full_name) {
    res.json({
      code: 400,
      message: "Tên không được để trống",
    });
    return;
  } else if (!req.body.email) {
    res.json({
      code: 400,
      message: "Email không được để trống",
    });
    return;
  } else if (!req.body.password) {
    res.json({
      code: 400,
      message: "Mật khẩu không được để trống",
    });
    return;
  }
  next();
};
