const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // sass: {
      //   additionalData: `@import "~@/style/tools/_sassMagic.scss";`,
      // },
      scss: {
        additionalData: `@import "@/style/settings/var.scss";@import "~@/style/tools/_sassMagic.scss";`,
      },
    },
  },
});
