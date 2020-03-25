const path = require("path")

module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/_variables.scss";`
            }
        }
    },
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000'
            }
        }
    }
};
