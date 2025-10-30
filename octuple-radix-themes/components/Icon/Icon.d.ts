import { default as React } from '../../../node_modules/react';
export interface IconProps {
    /**
     * Material Symbol icon name
     * @example "home", "settings", "person", "check"
     */
    name: string;
    /**
     * Icon size in pixels
     * @default 20
     */
    size?: number | string;
    /**
     * Icon color (CSS color value)
     */
    color?: string;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Additional inline styles
     */
    style?: React.CSSProperties;
    /**
     * Click handler
     */
    onClick?: () => void;
}
/**
 * Icon component using Material Symbols Outlined
 *
 * Wraps Material Symbols Outlined icons with a simple API.
 * All icons use weight 200 for a lighter, more modern appearance.
 *
 * @example
 * ```tsx
 * <Icon name="home" size={24} />
 * <Icon name="settings" color="var(--accent-9)" />
 * <Icon name="check" size={16} />
 * ```
 *
 * Browse icons: https://fonts.google.com/icons
 */
export declare function Icon({ name, size, color, className, style, onClick, }: IconProps): import("react/jsx-runtime").JSX.Element;
