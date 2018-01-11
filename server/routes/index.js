module.exports = function (app) {
    app.get('/', function (req, res) {
        const user = req.session.user;

        res.redirect('/p');
    });

    // 登录登出注册
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));

    app.use('/p', require('./p'));

    // 文章
    app.use('/post', require('./post'));

    // 用户
    app.use('/record', require('./record'));

    // 用户后台
    app.use('/user', require('./user'));
}