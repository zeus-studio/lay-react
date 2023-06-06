import classnames from 'classnames';
import React from 'react';

import './style.less';

// Col
export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?:
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
  sm?:
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
  md?:
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
  lg?:
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
  xl?:
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
  offsetXs?:
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
  offsetSm?:
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
  offsetMd?:
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
  offsetLg?:
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
  offsetXl?:
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
  space?:
    | '0'
    | '1'
    | '2'
    | '4'
    | '5'
    | '6'
    | '8'
    | '10'
    | '12'
    | '14'
    | '15'
    | '16'
    | '18'
    | '20'
    | '22'
    | '24'
    | '25'
    | '26'
    | '28'
    | '30'
    | '32';
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
    ...ret
  } = props;

  const rowClassNames = React.useMemo(
    () =>
      classnames('lay-row', {
        'lay-show-xs-block': xs === 'show',
        'lay-show-sm-block': sm === 'show',
        'lay-show-md-block': md === 'show',
        'lay-show-lg-block': lg === 'show',
        'lay-show-xl-block': xl === 'show',
        'lay-hide-xs': xs === 'hide',
        'lay-hide-sm': sm === 'hide',
        'lay-hide-md': md === 'hide',
        'lay-hide-lg': lg === 'hide',
        'lay-hide-xl': xl === 'hide',
        [`lay-col-space${space}`]: space !== '0',
      }),
    [xs, sm, md, lg, xl, space],
  );

  return (
    <div className={rowClassNames} {...ret}>
      {children}
    </div>
  );
};
