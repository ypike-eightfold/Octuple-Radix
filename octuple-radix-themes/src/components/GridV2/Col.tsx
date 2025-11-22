import React, { useContext } from 'react';
import { ColProps, ColSize, FlexType } from './GridV2.types';
import RowContext from './RowContext';
import './GridV2.css';

const parseFlex = (flex: FlexType): string => {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(String(flex))) {
    return `0 0 ${flex}`;
  }

  return String(flex);
};

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { gutter, wrap, supportFlexGap } = useContext(RowContext);

  const {
    children,
    classNames,
    flex,
    offset,
    order,
    pull,
    push,
    span,
    style,
    ...rest
  } = props;

  const colClassNames: string[] = ['grid-col'];

  if (classNames) colClassNames.push(classNames);
  if (span !== undefined) colClassNames.push(`grid-col-${span}`);
  if (order !== undefined) colClassNames.push(`grid-col-order-${order}`);
  if (offset !== undefined) colClassNames.push(`grid-col-offset-${offset}`);
  if (push !== undefined) colClassNames.push(`grid-col-push-${push}`);
  if (pull !== undefined) colClassNames.push(`grid-col-pull-${pull}`);

  // Handle responsive props
  sizes.forEach((size) => {
    const propSize = props[size];
    let sizeProps: ColSize = {};

    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object' && propSize !== null) {
      sizeProps = propSize;
    }

    if (sizeProps.span !== undefined) {
      colClassNames.push(`grid-col-${size}-${sizeProps.span}`);
    }
    if (sizeProps.order !== undefined) {
      colClassNames.push(`grid-col-${size}-order-${sizeProps.order}`);
    }
    if (sizeProps.offset !== undefined) {
      colClassNames.push(`grid-col-${size}-offset-${sizeProps.offset}`);
    }
    if (sizeProps.push !== undefined) {
      colClassNames.push(`grid-col-${size}-push-${sizeProps.push}`);
    }
    if (sizeProps.pull !== undefined) {
      colClassNames.push(`grid-col-${size}-pull-${sizeProps.pull}`);
    }
  });

  const mergedStyle: React.CSSProperties = { ...style };

  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);

    // Hack for Firefox to avoid size issue
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return (
    <div {...rest} style={mergedStyle} className={colClassNames.join(' ')} ref={ref}>
      {children}
    </div>
  );
});

Col.displayName = 'Col';

