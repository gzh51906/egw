/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find
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

/* 查询楼成图背景&标题 */
Router.get("/goodsbg", async (req, res) => {
    let data = await find("home_goodsbg", {});
    res.send(data)
})

/* 查询楼成图内容 */
Router.get("/goodsli", async (req, res) => {
    let data = await find("home_goodsli", {});
    res.send(data)
})

module.exports = Router;