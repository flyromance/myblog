const path = require("path");

const CWD = process.cwd();
const ENV = process.env.NODE_ENV || "development";

function resovle(p) {
  return path.resolve(p);
}

module.exports = {
  env: ENV,
  port: 7070,

  session: {
    secret: "myblog",
    key: "myblog",
    maxAge: 2592000000 // 一个月
  },

  // 数据库
  mongodb: "mongodb://localhost:27017/myblog", // 本机

  paths: {
    base: CWD,
    client: path.join(CWD, "client"),
    server: path.join(CWD, "server"),
    config: path.join(CWD, "config")
  },

  webpack: {
    src: {},
    dest: {
      patterns: "dist/static/webpack/**"
    }
  },

  assets: {
    src: {
      patterns: ["client/assets/**"],
      options: {}
    },
    dest: {
      dir: "dist/static/assets",
      patterns: ["dist/static/assets/**"]
    }
  },

  // jade模板
  template: {
    src: {
      patterns: [
        // "client/template/extends/**",
        // "client/template/includes/**",
        "client/template/**",
        "!client/template/pages"
      ],
      options: {}
    },
    dest: {
      dir: "dist/template",
      patterns: ["dist/template/**"]
    }
  }
};
