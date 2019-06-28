import React from 'react';
import _ from 'lodash'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import SettingsMenu from './menu'

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

import './styles.css'
import * as Colors from './../../theme/color'

import {
  PRESETS
} from './../../data'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    borderWidth: 2
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 200,
  },
  buttonViewTutorials: {
    color: Colors.primary,
    borderColor: Colors.primary
  },
  buttonFilter: {
    color: Colors.secondary,
    borderColor: Colors.secondary
  },
  buttonShowProducts: {
    color: Colors.third,
    borderColor: Colors.third
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${Colors.borderColor}`,
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const HeaderLeft = props => {
  const classes = useStyles();
  const handleChange = name => event => {
    const value = event.target.value;
    props.handleChange && props.handleChange(name, value);
  };

  const currentPreset = props.data && props.data.preset;

  return (
    <div className="header-left-wrapper">
      <div className="header-item-wrapper">
        <Select
          value={currentPreset}
          onChange={handleChange('preset')}
          input={<BootstrapInput name="preset" id="preset-select" />}
        >
          {
            _.map(PRESETS, (item) => {
              if (item.id == 0)
                return <MenuItem value={item.id}><em>{item.title}</em></MenuItem>
              else
                return <MenuItem value={item.id}>{item.title}</MenuItem>
            })
          }
        </Select>
      </div>
      <div className="header-item-wrapper">
        <SettingsMenu />
      </div>
    </div>
  )
}

const HeaderRight = props => {
  const classes = useStyles();
  return (
    <div className="header-right-wrapper">
      <div className="header-item-wrapper">
        <Button
          variant="outlined"
          className={`${classes.button} ${classes.buttonViewTutorials}`}
          onClick={() => window.open('https://asinzen.com/')}
        >
          <PlayArrowIcon />
          View Tutorials
        </Button>
      </div>
      <div className="header-item-wrapper">
        <Button
          variant="outlined"
          className={`${classes.button} ${classes.buttonFilter}`}
          onClick={props.handleClearFilter}
        >
          Clear Filters
        </Button>
      </div>
      <div className="header-item-wrapper">
        <Button
          variant="outlined"
          className={`${classes.button} ${classes.buttonShowProducts}`}
          onClick={() => alert('Button Show Products is clicked')}
        >
          Show Products
        </Button>
      </div>
    </div>
  )
}

const HeaderFilter = (props) => {
  return (
    <div className="header-filter-wrapper">
      <HeaderLeft {...props} />
      <HeaderRight {...props} />
      <div className="clear-float"></div>
    </div>
  )
}

export default HeaderFilter