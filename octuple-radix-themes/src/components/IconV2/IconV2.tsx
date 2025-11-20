import React from 'react';
import './IconV2.css';

export type IconV2Type = 'material' | 'brand';

export interface IconV2Props {
  /**
   * Icon type: 'material' for Material Symbols or 'brand' for Eightfold brand icons
   * @default 'material'
   */
  type?: IconV2Type;
  /**
   * Icon name
   * For Material: e.g. "home", "settings", "person", "check"
   * For Brand: e.g. "eightfold", "talent-design", "talent-flex", etc.
   */
  name: string;
  /**
   * Icon size in pixels
   * @default 24
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
  /**
   * Accessible label
   */
  ariaLabel?: string;
}

/**
 * IconV2 component supporting both Material Symbols and Eightfold Brand icons
 * 
 * Material icons use the Material Symbols Outlined font.
 * Brand icons are custom SVG icons specific to Eightfold products/features.
 * 
 * @example
 * ```tsx
 * // Material icon
 * <IconV2 name="home" size={24} />
 * <IconV2 type="material" name="settings" color="#0479ac" />
 * 
 * // Brand icon
 * <IconV2 type="brand" name="eightfold" size={20} />
 * <IconV2 type="brand" name="talent-design" color="#50CEE1" />
 * ```
 * 
 * Browse Material icons: https://fonts.google.com/icons
 */
export const IconV2: React.FC<IconV2Props> = ({
  type = 'material',
  name,
  size = 24,
  color,
  className = '',
  style,
  onClick,
  ariaLabel,
}) => {
  const commonStyles: React.CSSProperties = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
    color,
    cursor: onClick ? 'pointer' : undefined,
    ...style,
  };

  if (type === 'material') {
    return (
      <span
        className={`iconv2 iconv2--material material-symbols-outlined ${className}`}
        style={{
          fontSize: typeof size === 'number' ? `${size}px` : size,
          color,
          cursor: onClick ? 'pointer' : undefined,
          ...style,
        }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={ariaLabel || name}
      >
        {name}
      </span>
    );
  }

  // Brand icons - SVG based
  return (
    <span
      className={`iconv2 iconv2--brand iconv2--brand-${name} ${className}`}
      style={commonStyles}
      onClick={onClick}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel || name}
    >
      {renderBrandIcon(name, size, color)}
    </span>
  );
};

/**
 * Render Eightfold brand SVG icons
 */
const renderBrandIcon = (name: string, size: number | string, color?: string): React.ReactNode => {
  const fillColor = color || 'currentColor';
  const sizeValue = typeof size === 'number' ? size : parseInt(size as string, 10) || 24;

  switch (name) {
    case 'eightfold':
    case 'eightfold-ai':
      return (
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.333c-4.595 0-8.333-3.738-8.333-8.333S5.405 1.667 10 1.667s8.333 3.738 8.333 8.333-3.738 8.333-8.333 8.333z"
            fill={fillColor}
          />
          <path
            d="M14.167 10c0 2.301-1.866 4.167-4.167 4.167S5.833 12.301 5.833 10 7.699 5.833 10 5.833s4.167 1.866 4.167 4.167z"
            fill={fillColor}
          />
          <path
            d="M10 3.333c-3.682 0-6.667 2.985-6.667 6.667S6.318 16.667 10 16.667s6.667-2.985 6.667-6.667S13.682 3.333 10 3.333zm0 11.667c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"
            fill={fillColor}
          />
        </svg>
      );

    case 'talent-design':
      return (
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
            fill={fillColor}
          />
          <circle cx="12" cy="12" r="3" fill={fillColor} />
        </svg>
      );

    case 'talent-flex':
      return (
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            fill={fillColor}
          />
        </svg>
      );

    case 'career-hub':
      return (
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
            fill={fillColor}
          />
        </svg>
      );

    case 'talent-acquisition':
      return (
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            fill={fillColor}
          />
        </svg>
      );

    // Placeholder for icons not yet implemented
    default:
      return (
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" stroke={fillColor} strokeWidth="2" fill="none" />
          <text
            x="12"
            y="15"
            textAnchor="middle"
            fill={fillColor}
            fontSize="10"
            fontFamily="Arial, sans-serif"
          >
            ?
          </text>
        </svg>
      );
  }
};

IconV2.displayName = 'IconV2';

