const { defineConfig } = require('@vue/cli-service');

const REPO_NAME = process.env.VUE_APP_REPO_NAME || '/';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
});
