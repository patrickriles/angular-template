// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        basePath: 'src/web',
        frameworks: ['parallel', 'jasmine', '@angular-devkit/build-angular'],
        files:  ['assets/stylesheets/gns.min.css'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-parallel')
        ],
        parallelOptions: {
            executors: (Math.ceil(require('os').cpus().length / 2)),
            shardStrategy: 'round-robin'
        },
        client:{
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcov' ],
            fixWebpackSourcePaths: true
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        browserDisconnectTimeout: 15000,
        browserNoActivityTimeout: 15000,
        customLaunchers: {
            ChromeDebug: {
                base: 'Chrome',
                flags: [ '--remote-debugging-port=9333' ]
            }
        }
    });
};
