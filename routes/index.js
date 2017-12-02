module.exports = function (app) {
    app.get('/', function (req, res) {
        const user = req.session.user;

        res.render('front/index', {
            title: '博客',
            isSigned: user ? true : false,
            user: user
        });
    });

    // 登录登出注册
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));

    app.use('/p', require('./p'))

    // 文章
    app.use('/post', require('./post'));

    // 用户
    app.use('/record', require('./record'));

    // 用户后台
    app.use('/user', require('./user'));

    // 系统后台管理
    // app.use('/admin', require('./admin'));
}