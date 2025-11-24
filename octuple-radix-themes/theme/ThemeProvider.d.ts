import { default as React } from '../../node_modules/react';
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
export declare function ThemeProvider({ children, appearance, accentColor, grayColor, radius, scaling, }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
