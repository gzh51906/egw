/* 引入模块：express */
const express = require("express");

/* 配置路由中间件 */
const Router = express.Router();

/* 引入路由文件 */
const homeGoods = require("./goods");

/* 利用中间件格式化请求 */
Router.use(express.json(), express.urlencoded({
    extended: false
}))

/* 设置响应头跨域请求 */
Router.use((req, res, next) => {
    /* 设置响应头 */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
        // 等效于：res.status(200).send();
    } else {
        next();
    }
})

/* 配置路由接口 */
Router.use("/goods", homeGoods);

module.exports = Router;