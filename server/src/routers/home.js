/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find,
    remove,
    update
} = require("../mongo/mongodb");

/* 引入数据返回格式模板 */
const {
    formData
} = require("../utils");

/* 查询首页轮播图 */
Router.get("/01", async (req, res) => {
    let data = await find("home_banner", {});
    res.send(data)
})

/* 查询第一排图标 */
Router.get("/icon1", async (req, res) => {
    let data = await find("home_icon1", {});
    res.send(data)
})

/* 查询第二排图标 */
Router.get("/icon2", async (req, res) => {
    let data = await find("home_icon2", {});
    res.send(data)
})

/* 查询小banner */
Router.get("/small", async (req, res) => {
    let data = await find("home_smallb", {});
    res.send(data)
})

/* 查询时令热销 */
Router.get("/hotlist", async (req, res) => {
    let data = await find("home_hotlist", {});
    res.send(data)
})

/* 查询楼成图内容 */
Router.get("/goodsli", async (req, res) => {
    let data = await find("home_goodsli", {});
    res.send(data)
})

/* 查询楼成图背景&标题 */
Router.get("/goodsbg", async (req, res) => {
    let data = await find("home_goodsbgt", {});
    res.send(data)
})

/* 通过ID查询楼成图背景&标题 */
Router.get("/goodsbgt", async (req, res) => {
    let {
        id
    } = req.query;
    id = parseInt(id); //默认拿到的都是字符串要转换成数字
    let data
    try {
        data = await find("home_goodsbgt", {
            id
        });
        data = data[0];
        if (data) {
            res.send(formData({
                data
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

/* ====== */
Router.get("/goodstypeo", async (req, res) => {
    let data = await find("type_goods", {});
    res.send(data)
})
/* 通过ID查询分类商品信息 */
Router.get("/goodstype", async (req, res) => {
    let {
        id
    } = req.query;
    id = parseInt(id); //默认拿到的都是字符串要转换成数字
    let data
    try {
        data = await find("type_goods", {
            id
        });
        data = data[0];
        if (data) {
            res.send(formData({
                data
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



Router.get("/goodstypes", async (req, res) => {
    let {
        id
    } = req.query;
    // id = parseInt(id); //默认拿到的都是字符串要转换成数字
    let data = await find(`type_${id}`, {});
    res.send(data);
})

// 删除用户
Router.delete("/frit", (req, res) => {
    let {
        id
    } = req.query;
    // res.send(id);
    try {
        remove('type_1', {
            _id: id
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

// 删除商品
Router.delete("/fruit", (req, res) => {
    let {
        id
    } = req.query;
    console.log(id)
    try {
        remove('type_1', {
            _id: id
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

// 修改商品
Router.patch("/fruit", (req, res) => {

    let {
        id,
        goodsName,
        mallPrice
    } = req.body.params;
    // res.send(id);
    // console.log(id)
    // console.log(req.body.params)
    // console.log(id, goodsName, mallPrice)
    try {
        update('type_1', {
            _id: id
        }, {
            goodsName,
            mallPrice
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

module.exports = Router;