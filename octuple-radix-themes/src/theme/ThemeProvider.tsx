import React from 'react';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/fonts.css';
import '../styles/theme-overrides.css';
import '../styles/component-overrides.css';

export interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * Appearance mode
   * @default 'light'
   */
  appearance?: 'light' | 'dark' | 'inherit';
  /**
   * Accent color
   * @default 'indigo'
   */
  accentColor?: 'indigo' | 'violet' | 'blue' | 'green' | 'red' | 'orange' | 'pink';
  /**
   * Gray color scale
   * @default 'slate'
   */
  grayColor?: 'auto' | 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand';
  /**
   * Border radius
   * @default 'full'
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  /**
   * UI scaling
   * @default '100%'
   */
  scaling?: '90%' | '95%' | '100%' | '105%' | '110%';
}

/**
 * Octuple Radix Theme Provider
 * 
 * Wraps your application with Radix Themes configured for Octuple v3:
 * - Indigo accent color
 * - Full border radius (maximum roundness)
 * - Poppins font family
 * - Material Symbols Outlined icons
 * 
 * @example
 * ```tsx
 * import { ThemeProvider } from '@eightfold.ai/octuple-radix';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export function ThemeProvider({
  children,
  appearance = 'light',
  accentColor = 'indigo',
  grayColor = 'slate',
  radius = 'full',
  scaling = '100%',
}: ThemeProviderProps) {
  return (
    <Theme
      appearance={appearance}
      accentColor={accentColor}
      grayColor={grayColor}
      radius={radius}
      scaling={scaling}
      panelBackground="solid"
    >
      {children}
    </Theme>
  );
}

