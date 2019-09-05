/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find,
    insert
} = require("../mongo/mongodb");

/* 引入数据返回格式模板 */
const {
    formData
} = require("../utils");

/* 查询用户中心商品列表 */
Router.get("/list", async (req, res) => {
    let data = await find("user_list", {});
    res.send(data)
})

Router.get("/", async (req, res) => {
    let data = await find("user", {});
    res.send(data);
})

/* 增加用户 */
Router.post("/reg", async (req, res) => {
    let {
        username,
        password,
        phone
    } = req.body;
    console.log(username, password, phone)
    try {
        insert("user", {
            username,
            password,
            phone
        });
        res.send(formData());
    } catch (err) {
        res.send(formData({
            code: 0,
            data: err
        }));
    }
})

// 查看用户是否存在
Router.get("/check", async (req, res) => {
    let {
        username
    } = req.query;
    let data
    try {
        data = await find("user", {
            username
        });
        data = data[0];
        if (data) {
            res.send(formData({}));
        } else {
            res.send(formData({
                code: 0
            }));
        }
    } catch (err) {
        res.send(formData({
            code: 0
        }));
    }
})

// 用户登陆
Router.post("/login", async (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data;

    try {
        data = await find("user", {
            username,
            password
        });
        data = data[0];

        if (data) {
            res.send(formData({}));
        } else {
            res.send(formData({
                code: 0
            }));
        }
    } catch (err) {
        res.send(formData({
            code: 0
        }));
    }
})

module.exports = Router;