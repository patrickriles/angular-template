const App = require('@howser/api/server');
const http = require('http');
const { HowserRouter } = require('@howser/api/router/router');
const { logInfo } = require('@howser/api/logger/');

const app = App();

const howserRouter = new HowserRouter({
    callback: start,
    disableServerAuthentication: true
});

app.use(howserRouter.router);

function start() {
    /**
     * Get port from environment and store in Express.
     */
    const port = process.env.PORT || '3000';
    app.set('port', port);

    http.createServer(app).listen(port, function () {
        logInfo('API Started on port:' + port);
        logInfo('ENV:' + (process.env.NODE_ENV || 'development'));
    });
}
