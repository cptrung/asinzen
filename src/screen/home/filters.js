import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Filter } from './filter'

const Filters = (props) => {
  return (
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
  )
}

export default Filters