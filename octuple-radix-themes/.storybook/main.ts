import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // Configure base path for GitHub Pages deployment
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      // Set base path for GitHub Pages
      config.base = '/Octuple-Radix/';
    }
    return config;
  },
};

export default config;

