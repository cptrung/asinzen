import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Grid from '@material-ui/core/Grid';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import * as Colors from '../../../theme/color'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  arrowIcon: {
    color: Colors.primary,
    fontSize: 25
  },
  slider: {
    color: 'gray'
  }
});

function valuetext(value) {
  return `${value}`;
}

export const RangeControl = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([1, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <ArrowLeftIcon className={classes.arrowIcon} />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            className={classes.slider}
            fullWidth
          />
        </Grid>
        <Grid item>
          <ArrowRightIcon className={classes.arrowIcon} />
        </Grid>
      </Grid>
    </div>
  );
}