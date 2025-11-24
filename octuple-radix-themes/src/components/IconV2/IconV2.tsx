import React from 'react';
import './IconV2.css';

// Import all brand icon SVGs
import campaignsMedium from './brand-icons/campaigns-medium.svg';
import campaignsSmall from './brand-icons/campaigns-small.svg';
import careerExchangeMedium from './brand-icons/career-exchange-medium.svg';
import careerExchangeSmall from './brand-icons/career-exchange-small.svg';
import careerHubMedium from './brand-icons/career-hub-medium.svg';
import careerHubSmall from './brand-icons/career-hub-small.svg';
import customerCommunityMedium from './brand-icons/customer-community-medium.svg';
import customerCommunitySmall from './brand-icons/customer-community-small.svg';
import delegationCenterMedium from './brand-icons/delegation-center-medium.svg';
import delegationCenterSmall from './brand-icons/delegation-center-small.svg';
import managedServicesMedium from './brand-icons/managed-services-medium.svg';
import managedServicesSmall from './brand-icons/managed-services-small.svg';
import octupleMedium from './brand-icons/octuple-medium.svg';
import octupleSmall from './brand-icons/octuple-small.svg';
import pcsMedium from './brand-icons/pcs-medium.svg';
import pcsSmall from './brand-icons/pcs-small.svg';
import resourceManagementMedium from './brand-icons/resource-management-medium.svg';
import resourceManagementSmall from './brand-icons/resource-management-small.svg';
import selfServiceMedium from './brand-icons/self-service-medium.svg';
import selfServiceSmall from './brand-icons/self-service-small.svg';
import talentAcquisitionMedium from './brand-icons/talent-acquisition-medium.svg';
import talentAcquisitionSmall from './brand-icons/talent-acquisition-small.svg';
import talentDesignMedium from './brand-icons/talent-design-medium.svg';
import talentDesignSmall from './brand-icons/talent-design-small.svg';
import talentFlexMedium from './brand-icons/talent-flex-medium.svg';
import talentFlexSmall from './brand-icons/talent-flex-small.svg';
import talentIntelligencePlatformMedium from './brand-icons/talent-intelligence-platform-medium.svg';
import talentIntelligencePlatformSmall from './brand-icons/talent-intelligence-platform-small.svg';
import talentTrackingMedium from './brand-icons/talent-tracking-medium.svg';
import talentTrackingSmall from './brand-icons/talent-tracking-small.svg';
import talentUniversityMedium from './brand-icons/talent-university-medium.svg';
import talentUniversitySmall from './brand-icons/talent-university-small.svg';

export type IconV2Type = 'material' | 'brand';

export type BrandIconName =
  | 'campaigns'
  | 'career-exchange'
  | 'career-hub'
  | 'customer-community'
  | 'delegation-center'
  | 'managed-services'
  | 'octuple'
  | 'pcs'
  | 'resource-management'
  | 'self-service'
  | 'talent-acquisition'
  | 'talent-design'
  | 'talent-flex'
  | 'talent-intelligence-platform'
  | 'talent-tracking'
  | 'talent-university';

export type BrandIconSize = 'medium' | 'small';

export interface IconV2Props {
  /**
   * Icon type: 'material' for Material Symbols or 'brand' for Eightfold brand icons
   * @default 'material'
   */
  type?: IconV2Type;
  /**
   * Icon name
   * For Material: e.g. "home", "settings", "person", "check"
   * For Brand: e.g. "talent-design", "talent-flex", "career-hub", etc.
   */
  name: string;
  /**
   * Icon size in pixels (for Material icons) or 'medium'/'small' (for Brand icons)
   * @default 24 for Material, 'medium' for Brand
   */
  size?: number | string | BrandIconSize;
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

// Map brand icons to their SVG imports
const BRAND_ICONS: Record<BrandIconName, Record<BrandIconSize, string>> = {
  'campaigns': { medium: campaignsMedium, small: campaignsSmall },
  'career-exchange': { medium: careerExchangeMedium, small: careerExchangeSmall },
  'career-hub': { medium: careerHubMedium, small: careerHubSmall },
  'customer-community': { medium: customerCommunityMedium, small: customerCommunitySmall },
  'delegation-center': { medium: delegationCenterMedium, small: delegationCenterSmall },
  'managed-services': { medium: managedServicesMedium, small: managedServicesSmall },
  'octuple': { medium: octupleMedium, small: octupleSmall },
  'pcs': { medium: pcsMedium, small: pcsSmall },
  'resource-management': { medium: resourceManagementMedium, small: resourceManagementSmall },
  'self-service': { medium: selfServiceMedium, small: selfServiceSmall },
  'talent-acquisition': { medium: talentAcquisitionMedium, small: talentAcquisitionSmall },
  'talent-design': { medium: talentDesignMedium, small: talentDesignSmall },
  'talent-flex': { medium: talentFlexMedium, small: talentFlexSmall },
  'talent-intelligence-platform': { medium: talentIntelligencePlatformMedium, small: talentIntelligencePlatformSmall },
  'talent-tracking': { medium: talentTrackingMedium, small: talentTrackingSmall },
  'talent-university': { medium: talentUniversityMedium, small: talentUniversitySmall },
};

export const IconV2: React.FC<IconV2Props> = ({
  type = 'material',
  name,
  size,
  color,
  className = '',
  style,
  onClick,
  ariaLabel,
}) => {
  // For Material icons
  if (type === 'material') {
    const iconSize = typeof size === 'number' || typeof size === 'string' ? size : 24;
    const sizeValue = typeof iconSize === 'number' ? `${iconSize}px` : iconSize;

    return (
      <span
        className={`material-symbols-outlined ${className}`}
        style={{
          fontSize: sizeValue,
          color,
          cursor: onClick ? 'pointer' : undefined,
          ...style,
        }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        aria-label={ariaLabel || name}
      >
        {name}
      </span>
    );
  }

  // For Brand icons
  if (type === 'brand') {
    const brandIconName = name as BrandIconName;
    const brandIconSize = (size === 'small' || size === 'medium' ? size : 'medium') as BrandIconSize;
    
    // Get the SVG path
    const brandIcon = BRAND_ICONS[brandIconName];
    if (!brandIcon) {
      console.warn(`Brand icon "${name}" not found`);
      return null;
    }

    const svgPath = brandIcon[brandIconSize];
    
    // Determine pixel size based on brand icon size
    const pixelSize = brandIconSize === 'medium' ? 40 : 32;
    const sizeValue = `${pixelSize}px`;

    return (
      <span
        className={`iconv2 iconv2--brand ${className}`}
        style={{
          width: sizeValue,
          height: sizeValue,
          ...style,
        }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        aria-label={ariaLabel || name}
      >
        <img 
          src={svgPath} 
          alt={ariaLabel || name}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </span>
    );
  }

  return null;
};
