import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import {styles} from './get-in-touch.styles';
import Call from '../../../styles/svgIcons/Call';
import Email from '../../../styles/svgIcons/Email';
import Location from '../../../styles/svgIcons/Location';

const useStyles = makeStyles(styles);

const GetInTouch = () => {
  const classes = useStyles();
  return(
    <Box className={classes.getInTouchWrapper}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Box 
            display={'flex'}
            flexDirection={'column'}
            flex={1}
            alignItems={'center'}>
              <Box className={classes.iconWrapper}>
                   <Location className={classes.icon}/>
              </Box>
              <div className={classes.getInTouchOptionTitle}>ADDRESS</div>
              <p className={classes.getInTouchOptionDetail}>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Inc.</b>
                  <br></br>
                  205/45,Daryaganj
                  <br></br>
                  New Delhi 1000293
                  <br></br>
                  <br></br>
                </span>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Eastern Zonal Office</b>
                  <br></br>
                  205/45,Kolkata
                  <br></br>
                  West Bengal 7000293
                  <br></br>
                  <br></br>
                </span>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Southern Zonal Office</b>
                  <br></br>
                  "205/45,Bengaluru"
                  <br></br>
                  "Karnataka 1000293"
                </span>
              </p>
            </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
        <Box 
            display={'flex'}
            flexDirection={'column'}
            flex={1}
            alignItems={'center'}>
              <Box className={classes.iconWrapper}>
                   <Call className={classes.icon}/>
              </Box>
              <div className={classes.getInTouchOptionTitle}>CONTACTS</div>
              <p className={classes.getInTouchOptionDetail}>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Inc.</b>
                  <br></br>
                  +932788992221
                  <br></br>
                  +536612810590
                  <br></br>
                  <br></br>
                </span>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Eastern Zonal Office</b>
                  <br></br>
                  +151382467430
                  <br></br>
                  +715462495618
                  <br></br>
                  <br></br>
                </span>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Southern Zonal Office</b>
                  <br></br>
                  +151382467430
                  <br></br>
                  +715462495618
                </span>
              </p>
            </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
        <Box 
            display={'flex'}
            flexDirection={'column'}
            flex={1}
            alignItems={'center'}>
              <Box className={classes.iconWrapper}>
                   <Email className={classes.icon}/>
              </Box>
              <div className={classes.getInTouchOptionTitle}>CONTACTS</div>
              <p className={classes.getInTouchOptionDetail}>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Inc.</b>
                  <br></br>
                  contactus@bookkart.co.in
                  <br></br>
                  cmrs.helphub@bookkart.co.in
                  <br></br>
                  <br></br>
                </span>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Eastern Zonal Office</b>
                  <br></br>
                  eastern_nodal_office@bookart.co.in
                  <br></br>
                  helphub.eastern_nodal_office@bookart.co.in
                  <br></br>
                  <br></br>
                </span>
                <span style={{color: '#ffffff'}}>
                  <b>Bookkart Southern Zonal Office</b>
                  <br></br>
                  southern_nodal_office@bookkart.co.in
                  <br></br>
                  helphub.southern_nodal_office@bookkart.co.in
                </span>
              </p>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
  
};

export default GetInTouch;