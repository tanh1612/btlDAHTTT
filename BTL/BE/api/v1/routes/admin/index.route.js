const prefixApi = require("../../../../config/constant");
const userRouter = require("./user.route");
const articleRouter = require("./article.route");
const roleRouter = require("./role.route");
const categoryRouter = require("./category.route");
const approvalHistoryRouter = require("./approval-history.route");
const authRouter = require("./auth.route");
const tagRouter = require("./tag.route");






module.exports = (app) => {

    app.use(prefixApi.apiVersion_1 + "/admin" + "/role",roleRouter);
    app.use(prefixApi.apiVersion_1 + "/admin" + "/category",categoryRouter);
    app.use(prefixApi.apiVersion_1 + "/admin" + "/approval-history",approvalHistoryRouter);
    app.use(prefixApi.apiVersion_1 + "/admin" + "/login",authRouter);
    app.use(prefixApi.apiVersion_1 + "/admin" + "/user",userRouter);
    app.use(prefixApi.apiVersion_1 + "/admin" + "/article",articleRouter);
    app.use(prefixApi.apiVersion_1 + "/admin" + "/tag",tagRouter);



}

