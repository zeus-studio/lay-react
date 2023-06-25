import classnames from 'classnames';
import React from 'react';

import './style.less';

type ColSizeType =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

// Col
export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: ColSizeType;
  sm?: ColSizeType;
  md?: ColSizeType;
  lg?: ColSizeType;
  xl?: ColSizeType;
  offsetXs?: ColSizeType;
  offsetSm?: ColSizeType;
  offsetMd?: ColSizeType;
  offsetLg?: ColSizeType;
  offsetXl?: ColSizeType;
}

export const Col: React.FC<ColProps> = (props: ColProps) => {
  const {
    xs = '12',
    sm = '12',
    md = '12',
    lg = '12',
    xl = '12',
    offsetXs = '0',
    offsetSm = '0',
    offsetMd = '0',
    offsetLg = '0',
    offsetXl = '0',
    children,
    ...ret
  } = props;

  const colClassNames = React.useMemo(
    () =>
      classnames({
        'lay-hide-xs': xs === '0',
        'lay-hide-sm': sm === '0',
        'lay-hide-md': md === '0',
        'lay-hide-lg': lg === '0',
        'lay-hide-xl': xl === '0',
        [`lay-col-xs${xs}`]: xs !== '0',
        [`lay-col-sm${sm}`]: sm !== '0',
        [`lay-col-md${md}`]: md !== '0',
        [`lay-col-lg${lg}`]: lg !== '0',
        [`lay-col-xl${xl}`]: xl !== '0',
        [`lay-col-xs-offset${offsetXs}`]: offsetXs !== '0',
        [`lay-col-sm-offset${offsetSm}`]: offsetSm !== '0',
        [`lay-col-md-offset${offsetMd}`]: offsetMd !== '0',
        [`lay-col-lg-offset${offsetLg}`]: offsetLg !== '0',
        [`lay-col-xl-offset${offsetXl}`]: offsetXl !== '0',
      }),
    [xs, sm, md, lg, xl, offsetXs, offsetSm, offsetMd, offsetLg, offsetXl],
  );

  return (
    <div className={colClassNames} {...ret}>
      {children}
    </div>
  );
};

// Row
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: 'hide' | 'show';
  sm?: 'hide' | 'show';
  md?: 'hide' | 'show';
  lg?: 'hide' | 'show';
  xl?: 'hide' | 'show';
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'top' | 'center' | 'bottom' | 'baseline' | 'stretch';
  wrap?: boolean;
}

export const Row: React.FC<RowProps> = (props: RowProps) => {
  const {
    xs = 'show',
    sm = 'show',
    md = 'show',
    lg = 'show',
    xl = 'show',
    space = '0',
    children,
    align = 'top',
    wrap = false,
    ...ret
  } = props;

  const rowClassNames = React.useMemo(
    () =>
      classnames('lay-row', {
        [`lay-row__align-${align}`]: align,
        'lay-row__wrap': wrap,
        'lay-row-show-xs': xs === 'show',
        'lay-row-show-sm': sm === 'show',
        'lay-row-show-md': md === 'show',
        'lay-row-show-lg': lg === 'show',
        'lay-row-show-xl': xl === 'show',
        'lay-row-hide-xs': xs === 'hide',
        'lay-row-hide-sm': sm === 'hide',
        'lay-row-hide-md': md === 'hide',
        'lay-row-hide-lg': lg === 'hide',
        'lay-row-hide-xl': xl === 'hide',
        [`lay-col-space-${space}`]: !!space,
      }),
    [xs, sm, md, lg, xl, space, align, wrap],
  );

  return (
    <div className={rowClassNames} {...ret}>
      {children}
    </div>
  );
};
