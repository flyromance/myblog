var config = require('./config')
var glob = require('glob')

exports.getJsEntry = function () {
    var entries = glob.sync(path.join(config.srcDir, 'pages/**/*.app.js'))
    var entry = {};
    var reg = /src\/(pages\/[\w-]+)\.app.js/;
    entries.forEach(function (filepath, index) {
        var match = filepath.match(reg);
        if (match) {
            entry[match[1]] = filepath;
        }
    })
    return entry;
}