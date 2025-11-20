import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import '../src/styles/fonts.css';
import '../src/styles/component-overrides.css';
import '../src/styles/legacy-theme.css';

const preview: Preview = {
  parameters: {
    // Set Components Overview as the default landing page
    options: {
      storySort: {
        order: ['Documentation', 'Components'],
      },
    },
    // Set default page to Components Overview
    viewMode: 'docs',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111113' },
        { name: 'gray', value: '#f9f9fb' },
      ],
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    layout: 'padded',
    // Add theme switching toolbar
    toolbar: {
      theme: {
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
          title: 'Theme',
          icon: 'paintbrush',
        items: [
          { value: 'light', icon: 'sun', title: 'Radix Light' },
          { value: 'dark', icon: 'moon', title: 'Radix Dark' },
          { value: 'legacy-light', icon: 'component', title: 'Legacy Light' },
          { value: 'legacy-dark', icon: 'componentdriven', title: 'Legacy Dark' },
        ],
          dynamicTitle: true,
        },
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      // Determine appearance and theme class
      const isLegacy = theme.startsWith('legacy-');
      const isDark = theme.includes('dark');
      const appearance = isDark ? 'dark' : 'light';
      const accentColor = isLegacy ? 'blue' : 'indigo';
      
      // Apply theme classes
      const themeClasses = [];
      if (isLegacy) {
        themeClasses.push('legacy-theme');
        if (isDark) {
          themeClasses.push('legacy-theme-dark');
        }
      }
      
      return (
        <div className={themeClasses.join(' ')}>
          <ThemeProvider 
            appearance={appearance}
            accentColor={accentColor}
          >
            <Story />
          </ThemeProvider>
        </div>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', icon: 'sun', title: 'Radix Light' },
          { value: 'dark', icon: 'moon', title: 'Radix Dark' },
          { value: 'legacy-light', icon: 'component', title: 'Legacy Light' },
          { value: 'legacy-dark', icon: 'componentdriven', title: 'Legacy Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;

