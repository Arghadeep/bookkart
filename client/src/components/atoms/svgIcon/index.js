/*9fbef606107a605d69c0edbcd8029e5d*/
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './SvgIcon.style';
import SvgIcon from '@material-ui/core/SvgIcon';

const BookkartSvgIcon = (props) => {
  return <SvgIcon viewBox={props.viewBox || '0 0 48 48'} {...props} />;
};

export default withStyles(styles, { name: 'MuiSvgIcon' })(BookkartSvgIcon);
