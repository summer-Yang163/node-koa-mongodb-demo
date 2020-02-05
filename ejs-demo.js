const views = require('koa-views');
const Koa = require('koa');
const Router = require('koa-router');
const ejs = require('ejs')
const app = new Koa();
const router = new Router();
const path = require('path')
// app.use(views('views', { map: { html: ejs } }));
app.use(views(path.join(__dirname, './view'), {
    extension: 'tpl'
  }))
router.get('/add', async (ctx) => {
    let title = 'hello koa2'
    // ctx.body = title
    await ctx.render('index', {
        title
    })
})


app.use(router.routes()); //作用:启动路由 
app.use(router.allowedMethods()); //作用: 当请求出错时的处理逻辑 
app.listen(3000, () => {
    console.log('starting at port 3000');
});