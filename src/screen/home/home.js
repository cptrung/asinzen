import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Categories } from './categories'

import HeaderFilter from './header-filter'
import AdvancedFilters from './advanced-filters'
import Filters from './filters'

import './styles.css'

export class HomePage extends Component {
  categoriesRef = null;
  state = {
    data: {
      preset: 0,
      salePattern: 0,
      categories: []
    }
  }

  handleChangeValue = (name, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  }

  handleClearFilter = () => {
    //Clear categories filter
    this.categoriesRef && this.categoriesRef.clearCheckbox && this.categoriesRef.clearCheckbox()
  }

  render() {
    const { data } = this.state;
    return (
      <div className="home-wrapper">
        <HeaderFilter
          handleClearFilter={this.handleClearFilter}
          handleChange={this.handleChangeValue}
          data={data}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Categories
              ref={(ref) => this.categoriesRef = ref}
              data={data}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Filters />
          </Grid>
        </Grid>
        <AdvancedFilters />
      </div>
    )
  }
}