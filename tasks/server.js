const { spawn, exec } = require("child_process");

module.exports = function(config = {}) {
  return function startSeverTask(cb) {
    exec(
      "NODE_ENV=development pm2 start app.js --name myblog",
      {
        // cwd: ""
      },
      function(error, stdout, stderr) {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        // console.log(`stdout: ${stdout}`);
      }
    );
  };
};
