var express = require("express");
var path = require("path");
var session = require("express-session"); // 依赖 cookie
var MongoStore = require("connect-mongo")(session); // 依赖mongodb
var flash = require("connect-flash"); // 闪存中间件，无依赖
var winston = require("winston"); // 日志
var expressWinston = require("express-winston"); // 日志中间件，依赖winston
var expressFormidable = require("express-formidable"); // 处理表单中间件
var routes = require("./server/routes");
var pkg = require("./package");
var config = require("../config"); // 读取项目目录中config文件夹下的配置文件, 文件名与NODE_ENV一致
var url = require("url");
var jade = require("jade");

var app = express();

app.setMaxListeners(10000);

app.use(express.static("public")); // 配置静态资源目录

app.set("views", path.join(__dirname, "views")); // 指定视图文件目录
app.set("view engine", "jade"); // 配置默认的模板引擎
app.engine("jade", jade.__express); // 设置模板引擎渲染函数

// session中间件
app.use(
  session({
    name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
      maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new MongoStore({
      // 将 session 存储到 mongodb
      url: config.mongodb // mongodb 地址
    })
  })
);

// flash 中间件，用来显示通知
app.use(flash());

app.use(function(req, res, next) {
  var parsed = url.parse(req.url, true).query;
  req.query = parsed;
  next();
});

// 处理表单及文件上传的中间件
app.use(
  expressFormidable({
    uploadDir: path.join(__dirname, "public/img"), // 上传文件目录
    keepExtensions: true // 保留后缀
  })
);

// 设置模板全局常量
app.locals.blog = {
  title: pkg.name,
  description: pkg.description
};

// 添加模板必需的三个变量
app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  res.locals.success = req.flash("success").toString();
  res.locals.error = req.flash("error").toString();
  next();
});

// 正常请求的日志
// app.use(expressWinston.logger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     }),
//     new winston.transports.File({
//       filename: 'logs/success.log'
//     })
//   ]
// }));

// 配置路由
routes(app);

// 错误请求的日志
// app.use(expressWinston.errorLogger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     }),
//     new winston.transports.File({
//       filename: 'logs/error.log'
//     })
//   ]
// }));

// error page
app.use(function(req, res, next) {
  if (!res.headersSent) {
    res.status(404).render("pages/404");
  }
});

// 启动
app.listen(config.port, function() {
  console.log(`${pkg.name} listening on port ${config.port}`);
});
