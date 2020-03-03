module.exports = {
  // ...
  chainWebpack: config => {
    config.plugins.delete("fork-ts-checker");
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        return { ...options, transpileOnly: false };
      });
  }
};
