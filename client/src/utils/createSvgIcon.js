/*9fbef606107a605d69c0edbcd8029e5d*/
import React from 'react';
import SvgIcon from '../components/atoms/svgIcon';

export default function createSvgIcon(path, displayName, viewBox) {
  const Component = React.memo(
    React.forwardRef((props, ref) => {
      const { inlineTitle = '', ...updateProps } = viewBox
        ? {
            ...props,
            viewBox,
            'aria-labelledby':
              props && props.inlineTitle ? `${displayName}Title` : null,
          }
        : {
            ...props,
            'aria-labelledby':
              props && props.inlineTitle ? `${displayName}Title` : null,
          };

      return (
        <SvgIcon
          data-mui-test={`${displayName}Icon`}
          ref={ref}
          {...updateProps}
        >
          {inlineTitle && (
            <title id={`${displayName}Title`}>{inlineTitle}</title>
          )}
          {path}
        </SvgIcon>
      );
    })
  );

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`;
  }

  Component.muiName = SvgIcon.muiName;

  return Component;
}
