// 这个模块的作用就是帮我们合并config...
const configCreator = require("config-lite");

const CWD = process.cwd();
const configDirName = process.env.CONFIG_DIR_NAME || "config";

const config = configCreator(CWD, {});

module.exports = config;
