const router = require('koa-router')();

router.get('/login', async (ctx, next) => {
  ctx.body = {
    message: 'Login'
  };
});

router.post('/login', async ctx => {
  console.log("someone login");

  ctx.body = {
    username: ctx.request.body.username,
    password: ctx.request.body.password
  };
});

module.exports = router;