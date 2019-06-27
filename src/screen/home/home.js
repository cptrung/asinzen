import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Filter } from './filter'
// import { Button } from './../../component'
import { Categories } from './categories'
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import HeaderFilter from './header-filter'
import AdvancedFilters from './advanced-filters'

export class HomePage extends Component {
  categoriesRef = null;
  state = {
    data: {
      salePattern: 0
    }
  }

  handleChangeValue = (name, value) => {

  }

  handleClearFilter = () => {
    //Clear categories filter
    this.categoriesRef && this.categoriesRef.clearCheckbox && this.categoriesRef.clearCheckbox()
  }

  render() {
    return (
      <div style={{ padding: '0px 10px' }}>
        <HeaderFilter
          handleClearFilter={this.handleClearFilter}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Categories
              ref={(ref) => this.categoriesRef = ref}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <Filter
                  title='Avg Monthly Sales (Units)'
                  help='Average estimated monthly number of units sold'
                  type='number'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Filter
                  title='Avg Monthly Revenue'
                  help='Average estimated monthly revenue'
                  type='number'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Filter
                  title='Average Price'
                  help='Average listed price'
                  type='number'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Filter
                  title='Average Review Count'
                  help='Total review quantity'
                  type='number'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Filter
                  title='Keyword Contains '
                  help='Search using entire or partial keyword matches'
                  type='chip'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <AdvancedFilters />
      </div>
    )
  }
}