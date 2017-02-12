var path = require('path');
var output = path.join(__dirname, '../flow-output/');

exports.localhost = {
    runJsBefore: true,
    runJs: false,
    gzip: true,
    // https://babeljs.io/docs/plugins/
    babel: {
        only: '*.jsx',
        plugins: [
            'babel-plugin-transform-es2015-modules-amd',
            'babel-plugin-transform-class-properties'
        ],
        presets: ['react', 'es2015']
    },
    agent: {
        get: function (pathname) {
            if (pathname.match(/\.js$/)) {
                return {
                    // 方便调试 jsx
                    path: function (req) {
                        return req.path.replace(/\.js$/, '.jsx');
                    }
                }
            }
        }
    },
    output: output
};

exports.localhost1 = {
    root: output,
    port: 8090
};