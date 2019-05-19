const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy(
            '/smefp-im-web/',
            {
                target: 'http://10.4.208.88',
                // pathRewrite: {
                //     "/smefp-im-web": "/smefp-im-web"
                // },
                changeOrigin: true,

            },


        )
    );
};
