module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    "storybook-addon-pseudo-states",
    'storybook-design-token',
    require.resolve('storybook-addon-grid/preset'),
  ],
  "framework": "@storybook/html"
}