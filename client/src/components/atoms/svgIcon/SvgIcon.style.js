/*9fbef606107a605d69c0edbcd8029e5d*/
export const styles = (theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: 16,
      height: 16,
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(16),
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter,
      }),
    },
  };
};
