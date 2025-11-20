import React from 'react';
import { PanelFloatV2, PanelFloatV2Props } from '../PanelFloatV2';

export type ModalV2Size = 'small' | 'medium' | 'large';

export interface ModalV2Props extends Omit<PanelFloatV2Props, 'size'> {
  /** Size of the modal */
  size?: ModalV2Size;
}

export const ModalV2: React.FC<ModalV2Props> = (props) => {
  return <PanelFloatV2 {...props} />;
};

