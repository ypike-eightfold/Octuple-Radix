import React, { useEffect, useState, useMemo } from 'react';
import { RowProps, Gutter, Breakpoint } from './GridV2.types';
import RowContext from './RowContext';
import './GridV2.css';

type ScreenMap = Partial<Record<Breakpoint, boolean>>;

const responsiveArray: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

const responsiveObserve = {
  matchHandlers: {} as Record<string, { mql: MediaQueryList; listener: ((e: MediaQueryListEvent) => void) | null }>,
  dispatch(pointMap: ScreenMap) {
    return pointMap;
  },
  subscribe(func: (screens: ScreenMap) => void): string {
    const screens: ScreenMap = {
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
    };
    func(screens);
    return Math.random().toString(36);
  },
  unsubscribe(_token: string) {
    // Cleanup
  },
};

type Gap = number | undefined;

export const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ align, children, classNames, gutter = 0, justify, style, wrap, ...rest }, ref) => {
    const [screens, setScreens] = useState<ScreenMap>({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
    });

    const supportFlexGap = true; // Modern browsers support flex gap

    useEffect(() => {
      responsiveObserve.subscribe((screen: ScreenMap) => {
        setScreens(screen);
      });
      // Cleanup not needed for this simplified implementation
    }, []);

    const getGutter = (): [Gap, Gap] => {
      const results: [Gap, Gap] = [undefined, undefined];
      const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
      
      normalizedGutter.forEach((g: Gutter, index: number) => {
        if (typeof g === 'object' && g !== null) {
          for (let i = 0; i < responsiveArray.length; i++) {
            const breakpoint: Breakpoint = responsiveArray[i];
            if (screens[breakpoint] && g[breakpoint] !== undefined) {
              results[index] = g[breakpoint] as number;
              break;
            }
          }
        } else {
          results[index] = g;
        }
      });
      
      return results;
    };

    const gutters: [Gap, Gap] = getGutter();
    
    const rowClassNames: string[] = ['grid-row'];
    
    if (classNames) rowClassNames.push(classNames);
    if (wrap === false) rowClassNames.push('grid-row-no-wrap');
    if (justify === 'start') rowClassNames.push('grid-row-start');
    if (justify === 'end') rowClassNames.push('grid-row-end');
    if (justify === 'center') rowClassNames.push('grid-row-center');
    if (justify === 'space-around') rowClassNames.push('grid-row-space-around');
    if (justify === 'space-between') rowClassNames.push('grid-row-space-between');
    if (justify === 'space-evenly') rowClassNames.push('grid-row-space-evenly');
    if (align === 'top') rowClassNames.push('grid-row-top');
    if (align === 'middle') rowClassNames.push('grid-row-middle');
    if (align === 'bottom') rowClassNames.push('grid-row-bottom');
    if (align === 'stretch') rowClassNames.push('grid-row-stretch');

    const rowStyle: React.CSSProperties = {};
    const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
    const verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;

    if (horizontalGutter) {
      rowStyle.marginLeft = horizontalGutter;
      rowStyle.marginRight = horizontalGutter;
    }

    if (supportFlexGap) {
      if (gutters[1] !== undefined) {
        rowStyle.rowGap = gutters[1];
      }
    } else if (verticalGutter) {
      rowStyle.marginTop = verticalGutter;
      rowStyle.marginBottom = verticalGutter;
    }

    const [gutterH, gutterV] = gutters;
    const rowContext = useMemo(
      () => ({
        gutter: [gutterH || 0, gutterV || 0] as [number, number],
        wrap,
        supportFlexGap,
      }),
      [gutterH, gutterV, wrap, supportFlexGap]
    );

    return (
      <RowContext.Provider value={rowContext}>
        <div {...rest} className={rowClassNames.join(' ')} style={{ ...rowStyle, ...style }} ref={ref}>
          {children}
        </div>
      </RowContext.Provider>
    );
  }
);

Row.displayName = 'Row';

