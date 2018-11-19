var path = require("path");
const config = require("@base/config");
const baseDir = config.paths.base;
const srcDir = path.join(baseDir, "client");
const distDir = path.join(baseDir, "dist", "static", "webpack");
const viewDistDir = path.join(baseDir, "dist", "template");

// 用于webpack的配置
module.exports = {
  env: {
    NODE_ENV:
      process.env.NODE_ENV === "production" ? "production" : "development"
  },
  isProd: process.env.NODE_ENV === "production",
  srcDir,
  baseDir,
  distDir,
  viewDistDir,
  dll: {}
};
