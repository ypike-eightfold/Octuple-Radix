import React from 'react';

export type FillType = 'empty' | 'full' | 'half';

export type MatchScoreTheme =
  | 'red'
  | 'redOrange'
  | 'orange'
  | 'yellow'
  | 'yellowGreen'
  | 'green'
  | 'blueGreen'
  | 'blue'
  | 'blueViolet'
  | 'violet'
  | 'violetRed'
  | 'grey';

export interface MatchScoreV2Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Aria label for the component
   * @default 'score'
   */
  ariaLabel?: string;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Flag for hiding the label.
   * @default false
   */
  hideLabel?: boolean;
  /**
   * Flag for hiding the value labels (e.g., "3/5").
   * @default false
   */
  hideValues?: boolean;
  /**
   * Custom label text (e.g., "Match", "Rating").
   */
  label?: string;
  /**
   * The score value, like 2, 3.5, etc.
   * Supports whole and half values.
   * @default 0
   */
  score: number;
  /**
   * Theme color of the match score.
   * @default 'blue'
   */
  theme?: MatchScoreTheme;
  /**
   * The maximum score value. This limits the number of score indicators.
   * @default 5
   */
  total?: number;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

