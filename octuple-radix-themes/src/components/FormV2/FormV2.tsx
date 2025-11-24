import React from 'react';
import * as RadixForm from '@radix-ui/react-form';
import { FormV2Props } from './FormV2.types';
import { FormItem } from './FormV2.Item';
import './FormV2.css';

export const FormV2Root: React.FC<FormV2Props> = ({
  layout = 'vertical',
  classNames = '',
  onSubmit,
  children,
  ...rest
}) => {
  const formClassNames = `form-v2 form-v2-${layout} ${classNames}`;

  return (
    <RadixForm.Root className={formClassNames} onSubmit={onSubmit} {...rest}>
      {children}
    </RadixForm.Root>
  );
};

// Compound Component Pattern
export const FormV2 = Object.assign(FormV2Root, {
  Item: FormItem,
});

