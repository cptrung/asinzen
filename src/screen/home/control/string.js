import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 0
  }
}));

export const InputControl = (props) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      placeholder="Keyword Phrase"
      margin="normal"
      fullWidth
    />
  )
}