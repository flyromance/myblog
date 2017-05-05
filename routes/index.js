module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/post');
    });

    // 登录登出注册
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));

    // 文章
    app.use('/post', require('./post'));

    // 用户
    app.use('/record', require('./record'));

    // 已登录的用户
    app.use('/user', require('./user'));

    // 系统后台管理
    // app.use('/admin', require('./admin'));
}