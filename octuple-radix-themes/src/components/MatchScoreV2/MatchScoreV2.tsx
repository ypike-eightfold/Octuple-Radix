import React from 'react';
import { MatchScoreV2Props, FillType } from './MatchScoreV2.types';
import './MatchScoreV2.css';

const getArrayOfSize = (n: number) => Array.from(Array(n));

const MatchScoreCircle = ({ fill = 'empty' }: { fill?: FillType }) => (
  <div
    className={`match-score-circle ${
      fill === 'full' ? 'match-score-circle-full' : ''
    } ${fill === 'half' ? 'match-score-circle-half' : ''}`}
  />
);

export const MatchScoreV2 = React.forwardRef<HTMLDivElement, MatchScoreV2Props>(
  (
    {
      ariaLabel = 'score',
      classNames,
      hideLabel = false,
      hideValues = false,
      label,
      score = 0,
      theme = 'blue',
      total = 5,
      style,
      ...rest
    },
    ref
  ) => {
    // Calculate full, half, and empty circles
    const absTotal: number = Math.abs(total);
    const absScore: number = Math.round(score);
    const fullCircles: number = Math.trunc(Math.round(score * 2.0) / 2.0);
    const halfCircle: number = Math.trunc(Math.ceil(score - fullCircles - 0.25));
    const emptyCircles: number = total - fullCircles - halfCircle;

    const containerClasses = [
      'match-score-v2-container',
      `match-score-v2-theme-${theme}`,
      classNames,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={containerClasses}
        aria-label={ariaLabel}
        style={style}
        {...rest}
      >
        {/* Full circles */}
        {getArrayOfSize(fullCircles).map((_val, index) => (
          <MatchScoreCircle fill="full" key={`full-${index}`} />
        ))}

        {/* Half circle */}
        {!!halfCircle && <MatchScoreCircle fill="half" key="half" />}

        {/* Empty circles */}
        {getArrayOfSize(emptyCircles).map((_val, index) => (
          <MatchScoreCircle key={`empty-${index}`} />
        ))}

        {/* Label */}
        {!hideLabel && (
          <p className="match-score-v2-label">
            {label} {!hideValues && `${absScore}/${absTotal}`}
          </p>
        )}
      </div>
    );
  }
);

MatchScoreV2.displayName = 'MatchScoreV2';

