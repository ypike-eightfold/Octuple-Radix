import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Octuple Radix',
  brandUrl: 'https://ypike-eightfold.github.io/Octuple-Radix/',
  brandTarget: '_self',
  
  colorPrimary: '#8b5cf6', // violet
  colorSecondary: '#8b5cf6',
  
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 8,
  
  // Typography
  fontBase: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'Monaco, Consolas, "Courier New", monospace',
  
  // Text colors
  textColor: '#1f2937',
  textInverseColor: '#ffffff',
  
  // Toolbar default and active colors
  barTextColor: '#6b7280',
  barSelectedColor: '#8b5cf6',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e5e7eb',
  inputTextColor: '#1f2937',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
  // Set Components Overview as the default landing page
  initialActive: 'docs',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
});

