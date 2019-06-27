import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import SaveIcon from '@material-ui/icons/Save';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';

import * as Colors from './../../theme/color'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    borderWidth: 1,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 5,
    padding: '8px 0',
    color: 'gray',
    borderColor: Colors.borderColor
  },
  menuDeleteWrapper: {
    borderTop: `1px solid ${Colors.borderColor}`
  },
  menuIcon: {
    minWidth: '31px'
  },
  menuIconDelete: {
    color: 'red'
  },
  menuTextDelete: {
    color: 'red'
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        className={`${classes.button}`}
        onClick={handleClick}
      >
        <SettingsIcon />
        <ArrowDropDownIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => alert('Button Save is clicked')}>
          <ListItemIcon className={classes.menuIcon}>
            <SaveIcon />
          </ListItemIcon>
          <ListItemText primary="Save" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => alert('Button Save As is clicked')}>
          <ListItemIcon className={classes.menuIcon}>
            <SaveAltIcon />
          </ListItemIcon>
          <ListItemText primary="Save As" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => alert('Button Rename is clicked')}>
          <ListItemIcon className={classes.menuIcon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Rename" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => alert('Button Share is clicked')}>
          <ListItemIcon className={classes.menuIcon}>
            <ShareIcon />
          </ListItemIcon>
          <ListItemText primary="Share" />
        </StyledMenuItem>
        <div className={classes.menuDeleteWrapper}>
          <StyledMenuItem onClick={() => alert('Button Delete is clicked')}>
            <ListItemIcon className={`${classes.menuIcon} ${classes.menuIconDelete}`}>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete" className={classes.menuTextDelete} />
          </StyledMenuItem>
        </div>
      </StyledMenu>
    </div>
  );
}