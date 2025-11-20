import React from 'react';
import { Badge } from '@radix-ui/themes';
import { Icon } from '../Icon/Icon';
import './SkillTagV2.css';

export type SkillTagV2Size = 'small' | 'medium' | 'large';
export type SkillTagV2Type = 'default' | 'matched' | 'highlighted' | 'assessment';
export type SkillTagV2AssessmentStatus = 'below' | 'meet' | 'exceed' | 'upskilling';

export interface SkillTagV2Props {
  /** Content of the tag */
  children: React.ReactNode;
  /** Size of the tag */
  size?: SkillTagV2Size;
  /** Type/variant of the tag */
  type?: SkillTagV2Type;
  /** Assessment status (only for type="assessment") */
  assessmentStatus?: SkillTagV2AssessmentStatus;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

// Assessment status icon mapping
const ASSESSMENT_ICONS: Record<SkillTagV2AssessmentStatus, string> = {
  below: 'arrow_downward',
  meet: 'check',
  exceed: 'trending_up',
  upskilling: 'school',
};

// Assessment status background colors
const ASSESSMENT_COLORS: Record<SkillTagV2AssessmentStatus, string> = {
  below: '#ffc6c6',    // Light red
  meet: '#b9f4e4',     // Light green
  exceed: '#c8e6ff',   // Light blue
  upskilling: '#ffeac6', // Light orange
};

export const SkillTagV2: React.FC<SkillTagV2Props> = ({
  children,
  size = 'small',
  type = 'default',
  assessmentStatus = 'meet',
  onClick,
  className = '',
}) => {
  const isClickable = !!onClick;
  
  const sizeClass = `skilltagv2--${size}`;
  const typeClass = `skilltagv2--${type}`;
  const clickableClass = isClickable ? 'skilltagv2--clickable' : '';
  
  const containerClasses = [
    'skilltagv2',
    sizeClass,
    typeClass,
    clickableClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderLeftIcon = () => {
    if (type === 'matched') {
      return (
        <div className="skilltagv2__icon">
          <Icon name="check" size={size === 'small' ? 14 : size === 'medium' ? 18 : 20} />
        </div>
      );
    }

    if (type === 'highlighted') {
      return (
        <div className="skilltagv2__icon">
          <Icon name="star" size={size === 'small' ? 14 : size === 'medium' ? 16 : 20} />
        </div>
      );
    }

    if (type === 'assessment') {
      const iconSize = size === 'small' ? 18 : size === 'medium' ? 22 : 26;
      const bgColor = ASSESSMENT_COLORS[assessmentStatus];
      const iconName = ASSESSMENT_ICONS[assessmentStatus];

      return (
        <div className="skilltagv2__assessment-badge-wrapper">
          <div
            className="skilltagv2__assessment-badge"
            style={{ 
              backgroundColor: bgColor,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
            }}
          >
            <Icon 
              name={iconName} 
              size={Math.floor(iconSize * 0.6)} 
              className="skilltagv2__assessment-icon"
            />
          </div>
        </div>
      );
    }

    return null;
  };

  const handleClick = () => {
    if (isClickable) {
      onClick?.();
    }
  };

  return (
    <div
      className={containerClasses}
      onClick={handleClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      <Badge className="skilltagv2__badge">
        {renderLeftIcon()}
        <span className="skilltagv2__text">{children}</span>
      </Badge>
    </div>
  );
};

