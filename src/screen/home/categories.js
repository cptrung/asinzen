import React, { Component } from 'react';
import _ from 'lodash'

import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
// import { red } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { TitleGroup } from './component'
import * as Colors from '../../theme/color'

import {
  CATEGORIES
} from './../../data'

const GreenCheckbox = withStyles({
  root: {
    color: Colors.borderColor,
    padding: 0,
    margin: '0 9px',
    '&$checked': {
      color: Colors.primary,
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const Item = ({
  item,
  isSelected,
  handleChange
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={isSelected}
            onChange={handleChange(item.id)}
            value={item.id}
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
        label={item.title}
        style={{
          color: isSelected ? Colors.primary : 'black',
        }}
      />
    </Grid>
  )
}

export class Categories extends Component {

  state = {
    isSelectedAll: false,
    idsSelected: []
  }

  handleChange = (id) => () => {
    const { idsSelected, isSelectedAll } = this.state;
    const indexOfId = _.indexOf(idsSelected, id);
    const idsChanged = indexOfId >= 0 ? _.filter(idsSelected, value => value != id) : [...idsSelected, id];
    let isSelectedAllChange = !_.isEmpty(idsChanged) && idsChanged.length === CATEGORIES.length;

    this.setState({
      idsSelected: idsChanged,
      isSelectedAll: isSelectedAllChange
    })
  }

  handleChangeAll = () => {
    const { isSelectedAll } = this.state;
    this.setState({
      isSelectedAll: !isSelectedAll,
      idsSelected: !isSelectedAll && _.map(CATEGORIES, 'id') || []
    })
  }

  clearCheckbox = () => {
    this.setState({
      isSelectedAll: false,
      idsSelected: []
    })
  }

  render() {
    const { idsSelected, isSelectedAll } = this.state;

    return (
      <div>
        <TitleGroup text='Categories' />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={isSelectedAll}
                  onChange={this.handleChangeAll}
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label='All'
            />
          </Grid>
          {
            _.map(CATEGORIES, (item) => {
              const isSelected = _.indexOf(idsSelected, item.id) >= 0 | false
              return (
                <Item
                  item={item}
                  isSelected={isSelected}
                  handleChange={this.handleChange}
                />
              )
            })
          }
        </Grid>
      </div>
    );
  }
}