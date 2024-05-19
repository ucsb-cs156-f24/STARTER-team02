const WebpackPluginFailBuildOnWarning = require("./webpack-plugin-fail-build-on-warning");

module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@chromatic-com/storybook"
  ],

  webpackFinal: async (config) => {
    config.plugins.push(new WebpackPluginFailBuildOnWarning());
    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: ["../public"],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}
