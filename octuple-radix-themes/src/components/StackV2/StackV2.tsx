import React, { useState, useEffect } from 'react';
import { StackProps, StackBreakpoint } from './StackV2.types';
import './StackV2.css';

// Simple breakpoint matching
const useMatchMedia = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export const StackV2 = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      fullWidth: defaultFullWidth,
      direction: defaultDirection = 'horizontal',
      justify: defaultJustify,
      inline: defaultInline,
      align: defaultAlign,
      wrap: defaultWrap,
      gap: defaultGap,
      flexGap: defaultFlexGap,
      style = {},
      classNames,
      breakpoints = {},
      children,
      ...rest
    },
    ref
  ) => {
    const xSmallScreenActive = useMatchMedia('(max-width: 575px)');
    const smallScreenActive = useMatchMedia('(min-width: 576px) and (max-width: 767px)');
    const mediumScreenActive = useMatchMedia('(min-width: 768px) and (max-width: 991px)');
    const largeScreenActive = useMatchMedia('(min-width: 992px)');

    const breakPointConfigurationList: Array<[StackBreakpoint, boolean]> = [
      ['large', largeScreenActive],
      ['medium', mediumScreenActive],
      ['small', smallScreenActive],
      ['xsmall', xSmallScreenActive],
    ];

    const activeBreakPointStackPropsIndex = breakPointConfigurationList.findIndex(
      (breakPointConfiguration) => {
        return breakPointConfiguration[1];
      }
    );

    const activeBreakPointStackProps =
      activeBreakPointStackPropsIndex > -1
        ? breakpoints[breakPointConfigurationList[activeBreakPointStackPropsIndex][0]]
        : {};

    const resolvedStackIntrinsicProps = {
      ...{
        fullWidth: defaultFullWidth,
        direction: defaultDirection,
        justify: defaultJustify,
        inline: defaultInline,
        align: defaultAlign,
        wrap: defaultWrap,
        gap: defaultGap,
        flexGap: defaultFlexGap,
      },
      ...(activeBreakPointStackProps || {}),
    };

    const { fullWidth, direction, justify, inline, align, wrap, gap, flexGap } =
      resolvedStackIntrinsicProps;

    const stackClassNames: string[] = ['stack-v2'];

    if (classNames) stackClassNames.push(classNames);
    if (inline) stackClassNames.push('stack-v2-inline');
    if (fullWidth) stackClassNames.push('stack-v2-full-width');
    if (direction === 'vertical') stackClassNames.push('stack-v2-vertical');
    if (direction === 'horizontal') stackClassNames.push('stack-v2-horizontal');
    if (gap) stackClassNames.push(`stack-v2-gap-${gap}`);
    if (flexGap) stackClassNames.push(`stack-v2-gap-${flexGap}`);

    return (
      <div
        ref={ref}
        className={stackClassNames.join(' ')}
        style={{
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

StackV2.displayName = 'StackV2';

