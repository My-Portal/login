import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LockOutlinedIcon from '@material-ui/icons/Lock';

import firebase from 'firebase/app';
import "firebase/auth";

// eslint-disable-next-line
import RawLogin from './RawLogin';
import Copyright from './Copyright';

import useStyles from './styles';



export default function Login() {
  const classes = useStyles();

  console.log(firebase)

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        {/* INSERT PARTICLES HERE */}
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          {/* INSERT LOGIN HERE */}
          {/* <RawLogin classes={classes} /> */}
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
