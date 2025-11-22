import React from 'react';

export type SkillBlockStatus = 'default' | 'highlight' | 'match';

export type SkillBlockAssessment =
  | 'below'
  | 'meet'
  | 'exceed'
  | 'upskilling'
  | 'below-upskilling'
  | 'meet-upskilling'
  | 'exceed-upskilling';

export type SkillBlockSize = 'small' | 'medium' | 'large';

export interface SkillBlockMenuItem {
  key: string;
  label: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface SkillBlockV2Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * The name/label of the skill
   */
  label: string;
  
  /**
   * Visual status of the skill
   * @default 'default'
   */
  status?: SkillBlockStatus;
  
  /**
   * Assessment status with specific color themes
   */
  assessment?: SkillBlockAssessment;
  
  /**
   * Size of the skill block
   * @default 'medium'
   */
  size?: SkillBlockSize;
  
  /**
   * Whether the skill is endorsed
   * @default false
   */
  endorsement?: boolean;
  
  /**
   * Whether the skill is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Show required mark indicator
   * @default true
   */
  requiredMark?: boolean;
  
  /**
   * Whether the block is clickable
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Whether the block is hoverable
   * @default false
   */
  hoverable?: boolean;
  
  /**
   * Whether the block is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the block has a border
   * @default true
   */
  bordered?: boolean;
  
  /**
   * Whether the block is expandable
   * @default false
   */
  expandable?: boolean;
  
  /**
   * Whether the block is currently expanded
   * @default false
   */
  expanded?: boolean;
  
  /**
   * Content to display in the main section
   */
  content?: React.ReactNode;
  
  /**
   * Content to display when expanded
   */
  expandedContent?: React.ReactNode;
  
  /**
   * Icon name to display
   */
  icon?: string;
  
  /**
   * Menu items for dropdown
   */
  menuItems?: SkillBlockMenuItem[];
  
  /**
   * Custom class names
   */
  classNames?: string;
  
  /**
   * Custom width
   */
  width?: string | number;
  
  /**
   * Min width
   * @default 'fit-content'
   */
  minWidth?: string | number;
  
  /**
   * Max width
   */
  maxWidth?: string | number;
  
  /**
   * Callback when block is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Callback when expand button is clicked
   */
  onExpandChange?: (expanded: boolean) => void;
}

