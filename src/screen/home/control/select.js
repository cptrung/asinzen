import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({

}));

export const SelectControl = (props) => {
  const classes = useStyles();
  return (
    <Select
      // value={values.age}
      // onChange={handleChange}
      fullWidth
      inputProps={{
        name: 'age',
        id: 'age-simple',
      }}
    >{
        !!props.items && props.items.map(item => {
          return <MenuItem value={item.id}>{item.title}</MenuItem>
        })
      }
    </Select>
  )
}