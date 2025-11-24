import React from 'react';

export type FormLayout = 'horizontal' | 'vertical' | 'inline';

export interface FormV2Props extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /**
   * Form layout
   * @default 'vertical'
   */
  layout?: FormLayout;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Form submit handler
   */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  /**
   * Form children (Form.Item components)
   */
  children?: React.ReactNode;
}

export interface FormItemV2Props {
  /**
   * Field name (required for form data)
   */
  name: string;
  /**
   * Field label
   */
  label?: React.ReactNode;
  /**
   * Help text / description
   */
  help?: React.ReactNode;
  /**
   * Is field required?
   * @default false
   */
  required?: boolean;
  /**
   * Custom validation pattern (regex)
   */
  pattern?: string | RegExp;
  /**
   * Custom validation message for pattern
   */
  patternMessage?: string;
  /**
   * Required validation message
   * @default 'This field is required'
   */
  requiredMessage?: string;
  /**
   * Min length validation
   */
  minLength?: number;
  /**
   * Min length validation message
   */
  minLengthMessage?: string;
  /**
   * Max length validation
   */
  maxLength?: number;
  /**
   * Max length validation message
   */
  maxLengthMessage?: string;
  /**
   * Field input element (Input, TextArea, Select, etc.)
   */
  children: React.ReactElement;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

