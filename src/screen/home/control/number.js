import React from 'react'

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import ArrowRightIcon from '@material-ui/icons/ArrowRightAlt';
import * as Colors from '../../../theme/color'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 0
  },
  arrowIcon: {
    color: Colors.borderColor
  }
}));

export const NumberInputControl = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={5}>
        <TextField
          id="min"
          className={classes.textField}
          placeholder="Min"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={1}>
        <ArrowRightIcon className={classes.arrowIcon} fontSize='small' />
      </Grid>
      <Grid item xs={12} sm={5}>
        <TextField
          id="max"
          className={classes.textField}
          placeholder="Max"
          margin="normal"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}