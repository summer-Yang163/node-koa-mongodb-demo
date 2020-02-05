const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     // await next();
//     ctx.body='hello koa2'
//     // todo
// });
// app.use( async (ctx)=>{
//     ctx.body='hello koa2'
// })
router.get('/', function (ctx, next) {
    ctx.body = "Hello koa";
})

router.get('/', function (ctx, next) {
    ctx.body = "Hello koa";
})
router.get('/news', (ctx, next) => {
    ctx.body = "新闻 page"
});
// app.use(async (ctx, next) => {
//     await next();
//     // todo
// });
app.use(router.routes()); 

// 在端口8081监听:
app.listen(8081);
