/** @type { import('@storybook/nextjs').StorybookConfig } */

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs)"
  ],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: ["../public"],

  docs: {
    autodocs: "tag",
  },
};

export default config;