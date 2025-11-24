import React from 'react';
import * as RadixForm from '@radix-ui/react-form';
import { FormItemV2Props } from './FormV2.types';
import './FormV2.css';

export const FormItem: React.FC<FormItemV2Props> = ({
  name,
  label,
  help,
  required = false,
  pattern,
  patternMessage = 'Invalid format',
  requiredMessage = 'This field is required',
  minLength,
  minLengthMessage,
  maxLength,
  maxLengthMessage,
  children,
  classNames = '',
  style,
}) => {
  // Clone the child element and inject name prop
  const childElement = React.cloneElement(children, {
    name,
    required,
  });

  return (
    <RadixForm.Field name={name} className={`form-v2-field ${classNames}`} style={style}>
      {/* Label */}
      {label && (
        <div className="form-v2-label-wrapper">
          <RadixForm.Label className="form-v2-label">
            {label}
            {required && <span className="form-v2-required-mark">*</span>}
          </RadixForm.Label>
          {help && <div className="form-v2-help">{help}</div>}
        </div>
      )}

      {/* Control */}
      <RadixForm.Control asChild>{childElement}</RadixForm.Control>

      {/* Validation Messages */}
      {required && (
        <RadixForm.Message className="form-v2-error" match="valueMissing">
          {requiredMessage}
        </RadixForm.Message>
      )}

      {pattern && (
        <RadixForm.Message className="form-v2-error" match="patternMismatch">
          {patternMessage}
        </RadixForm.Message>
      )}

      {minLength && (
        <RadixForm.Message className="form-v2-error" match="tooShort">
          {minLengthMessage || `Minimum ${minLength} characters required`}
        </RadixForm.Message>
      )}

      {maxLength && (
        <RadixForm.Message className="form-v2-error" match="tooLong">
          {maxLengthMessage || `Maximum ${maxLength} characters allowed`}
        </RadixForm.Message>
      )}

      {/* Type Mismatch (for email, url, etc.) */}
      <RadixForm.Message className="form-v2-error" match="typeMismatch">
        Invalid format
      </RadixForm.Message>
    </RadixForm.Field>
  );
};

