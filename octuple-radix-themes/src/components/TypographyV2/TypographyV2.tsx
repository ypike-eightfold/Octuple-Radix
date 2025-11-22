import React from 'react';
import { Text, Heading } from '@radix-ui/themes';
import './TypographyV2.css';

// Typography.Title - For headings
export interface TitleProps {
  /** Heading level (1-5) */
  level?: 1 | 2 | 3 | 4 | 5;
  /** Children content */
  children: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Style */
  style?: React.CSSProperties;
}

export const Title: React.FC<TitleProps> = ({
  level = 1,
  children,
  disabled = false,
  className = '',
  style,
}) => {
  const headingClass = `typography-v2-title ${disabled ? 'typography-v2-disabled' : ''} ${className}`;
  
  return (
    <Heading 
      as={`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5'}
      className={headingClass}
      style={style}
    >
      {children}
    </Heading>
  );
};

// Typography.Text - For body text
export interface TextProps {
  /** Children content */
  children: React.ReactNode;
  /** Semantic type/color */
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  /** Strong/bold text */
  strong?: boolean;
  /** Italic text */
  italic?: boolean;
  /** Underline text */
  underline?: boolean;
  /** Deleted/strikethrough text */
  delete?: boolean;
  /** Code formatting */
  code?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Style */
  style?: React.CSSProperties;
}

export const TypographyText: React.FC<TextProps> = ({
  children,
  type,
  strong = false,
  italic = false,
  underline = false,
  delete: isDelete = false,
  code = false,
  disabled = false,
  className = '',
  style,
}) => {
  const textClass = `typography-v2-text ${type ? `typography-v2-${type}` : ''} ${
    disabled ? 'typography-v2-disabled' : ''
  } ${underline ? 'typography-v2-underline' : ''} ${
    isDelete ? 'typography-v2-delete' : ''
  } ${className}`;

  let content = children;

  if (code) {
    content = <code className="typography-v2-code">{content}</code>;
  }

  if (strong) {
    content = <strong>{content}</strong>;
  }

  if (italic) {
    content = <em>{content}</em>;
  }

  if (isDelete) {
    content = <del>{content}</del>;
  }

  return (
    <Text 
      as="span"
      className={textClass}
      style={style}
    >
      {content}
    </Text>
  );
};

// Typography.Paragraph - For paragraph text
export interface ParagraphProps extends Omit<TextProps, 'children'> {
  /** Children content */
  children: React.ReactNode;
  /** Ellipsis config */
  ellipsis?: boolean | { rows?: number };
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  ellipsis,
  ...textProps
}) => {
  const ellipsisClass = ellipsis ? 'typography-v2-ellipsis' : '';
  const ellipsisStyle = typeof ellipsis === 'object' && ellipsis.rows 
    ? { WebkitLineClamp: ellipsis.rows } as React.CSSProperties
    : {};

  return (
    <Text 
      as="p"
      className={`typography-v2-paragraph ${ellipsisClass} ${textProps.className || ''}`}
      style={{ ...ellipsisStyle, ...textProps.style }}
    >
      <TypographyText {...textProps}>
        {children}
      </TypographyText>
    </Text>
  );
};

// Main Typography component with sub-components
export const TypographyV2 = {
  Title,
  Text: TypographyText,
  Paragraph,
};

