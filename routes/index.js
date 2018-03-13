const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    // ctx.response.body = 'Welcome to Home page ...';
    ctx.body = { foo: 'hello'};
})

module.exports = router;