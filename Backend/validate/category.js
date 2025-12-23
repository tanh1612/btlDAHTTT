module.exports.validate = (req, res, next) => {
  if (!req.body.category_name) {
    res.json({
      code: 400,
      message: "Tên danh mục không được để trống",
    });
    return;
  } 
  // else if (!req.body.description) {
  //   res.json({
  //     code: 200,
  //     message: "Nội dung danh mục không được để trống",
  //   });
  //   return;
  // }
  
  next();
};
