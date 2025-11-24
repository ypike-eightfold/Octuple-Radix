import React from 'react';

export interface LiveTaskBarV2Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Custom header component (e.g., logo + status label)
   */
  header?: React.ReactNode;
  /**
   * Array of task/status components to display
   * Typically buttons with badges showing metrics/counts
   */
  tasks?: React.ReactNode[];
  /**
   * Action buttons on the right side
   * (e.g., "Ask AIR" button, overflow menu button)
   */
  actions?: React.ReactNode[];
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  /**
   * Role of the live task bar
   * @default 'toolbar'
   */
  role?: string;
}

