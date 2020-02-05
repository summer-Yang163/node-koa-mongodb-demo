const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router(); 
router.get('/', function (ctx, next) {
    ctx.body = "Hello koa";
})

router.get('/newscontent', (ctx, next) => {
    let url = ctx.url;
    //从 request 中获取 GET 请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring; //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
    console.log(ctx)
});
router.get('/product/:aid', async (ctx,next) => {
    console.log(ctx.params); //{ aid: '123' } //获取动态路由的数据
    next()
    ctx.body = '这是商品页面' + ctx.params.aid;
    
});

app.use(router.routes()); //作用:启动路由 
app.use(router.allowedMethods()); //作用: 当请求出错时的处理逻辑 
app.listen(3000, () => {
    console.log('starting at port 3000');
});