/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find,
    insert,
    remove,
    update
} = require("../mongo/mongodb");

/* 引入数据返回格式模板 */
const {
    formData,
    token
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
    var date = new Date();
    var year = date.getFullYear();
    var month = fun(date.getMonth() + 1);
    var day = fun(date.getDate());
    var house = fun(date.getHours());
    var minute = fun(date.getMinutes());
    var second = fun(date.getSeconds());

    function fun(i) {
        //判断传入的参数是否为小于10
        if (i < 10) {
            //参数小于10，转换为字符串然后和0拼接
            i = String(i);
            i = 0 + i;
            return i;
        }
        return i;
    }
    let time = `${year}-${month}-${day}  ${house}:${minute}:${second}`;

    let {
        username,
        password
    } = req.body;
    // console.log(username, password, phone)
    try {
        insert("user", {
            time,
            username,
            password
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
        let authorization = token.create(username);
        if (data) {
            res.send(formData({
                data: {
                    authorization
                }
            }));
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

// 删除用户
Router.delete("/", (req, res) => {
    let {
        id
    } = req.query;
    // res.send(id);
    try {
        remove('user', {
            _id: id
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

// 修改用户
Router.patch("/", (req, res) => {

    let {
        id,
        username,
        password
    } = req.body.params;
    // res.send(id);
    // console.log(id)
    // console.log(req.body.params)
    try {
        update('user', {
            _id: id
        }, {
            username,
            password
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

module.exports = Router;