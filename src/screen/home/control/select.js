import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const SelectControl = (props) => {
  return (
    <Select
      fullWidth
    >{
        !!props.items && props.items.map(item => {
          return <MenuItem value={item.id}>{item.title}</MenuItem>
        })
      }
    </Select>
  )
}