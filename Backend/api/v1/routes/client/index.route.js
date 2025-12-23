const prefixApi = require("../../../../config/constant");
const articleRouter = require("./article.route");
const authRouter = require("./auth.route");


module.exports = (app) => {

    
    app.use(prefixApi.apiVersion_1 + "/article",articleRouter);
    app.use(prefixApi.apiVersion_1 + "/",authRouter);



}

