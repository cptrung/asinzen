import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 0
  }
}));

export const ChipControl = (props) => {
  const classes = useStyles();
  return (
    <TextField
      id="chip"
      className={classes.textField}
      placeholder="Keyword Phrase"
      margin="normal"
      fullWidth
    />
  )
}