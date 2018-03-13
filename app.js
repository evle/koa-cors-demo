'use strict'

// 导入koa
const Koa = require('koa');

const app = new Koa();
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser')();
const convert = require('koa-convert');
const cors = require('koa-cors');
const json = require('koa-json');

const index = require('./routes/index');
const user = require('./routes/user');

app.use(bodyparser);
app.use(json({pretty:false, param:'pretty'}));
app.use(cors());

router.use('/', index.routes(), index.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
app.use(router.routes(), router.allowedMethods());

app.listen(4002);
console.log("app start at port 4002 ...");