## 开发: npm run dev
- 启动前端资源的构建，并监听变动重新构建
    - 删除目录
    - 监听变化，构建
    - 构建，src到dist
- 启动node服务，并监听变动重启服务
    - 自己写
    - pm2
    - supervisor


## 手动发布
- 本地执行
    - git add . & git commit -m 'desc'
- 登录服务器
    - ssh username@123.23.23.23
- 服务器执行
    - cd到项目目录
    - git pull
    - npm run prod


## 自动发布
- 本地执行
    - git add . $ git commit -m 'desc'
    - 要配置ci，自动集成


## 线上: npm run prod
- node server
    - 先停止服务
    - 重新启动服务
- front
    - 删除原有的资源
    - 构建build资源


## 数据库mongodb
- window用户
    - 用系统管理员启动git bash，再执行 net start mongo5
- mac
    - mongod --config /usr/local/etc/mongod.conf
- 购买了云服务器后，不用本地启动mongo了


### client
- clinet 中的assets目录中文件是不需要编码的，可以直接，用于直接