import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

import './../styles.css'
import * as Colors from '../../../theme/color'

const useStyles = makeStyles(theme => ({
  iconButton: {
    margin: 0,
    padding: 0,
    marginLeft: 5
  },
  helpIcon: {
    color: Colors.primary,
    fontSize: 17
  },
}));

export const TitleGroup = ({
  text,
  help
}) => {
  const classes = useStyles();

  return (
    <div>
      <div className="title-group">{text} </div>
      {help && (
        <Tooltip title={help}>
          <IconButton className={classes.iconButton}>
            <HelpIcon className={classes.helpIcon} />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
}