const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: "../plannerz_backend/src/main/resources/static",
    devServer: {
        proxy: "http://localhost:8000",
    },
    configureWebpack: {
        devtool: 'source-map'
    }
});
