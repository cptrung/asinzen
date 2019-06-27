import React, { Component } from 'react';
import _ from 'lodash'
import Grid from '@material-ui/core/Grid';
import HeaderAdvancedFilter from './header-advanced-filter'
import { Filter } from './filter'

import {
  SALE_PATTERN,
  SHIPPING_SIZE,
  MONTHS
} from '../../data'

class AdvancedFilters extends Component {
  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <HeaderAdvancedFilter />
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Average Net Profit'
                help='Average per sale revenue remaining after Amazon referral & FBA fees '
                type='number'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Average Profit Margin (%) '
                help='Average per sale revenue percentage remaining after Amazon referral & FBA fees '
                type='number'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Sales Year Over Year (%) '
                help='The difference in average sales volume now versus the same period a year ago'
                type='number'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Price Change (%)'
                help='The increase or decrease in Average Price over the last 90 days'
                type='number'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Sales Change (%)'
                help='The increase or decrease in Average Sales over the last 90 days'
                type='number'
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <Filter
                title='Review Change'
                help='The increase or decrease in Average Review over the last 90 days'
                type='number'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Best Sales Period'
                help='The calendar month in which Average Sales are at its highest volume'
                type='select'
                items={MONTHS}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Sales Pattern'
                help='The sales trend for the combined Average Sales. Are sales declining, up & coming (increasing), seasonal, or typical (consistent with normal fluctuations)'
                type='select'
                items={SALE_PATTERN}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <Filter
                title='Sales to Reviews'
                help='This is the average sales to review ratio '
                type='number'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Average Review Rating'
                help='The average review rating'
                type='range'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Avg Review Rate (%)'
                help='The average review percentage. Review rate is the number of reviews received for every 100 orders.'
                type='range'
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <Filter
                title='Amazon Fulfillment (%)'
                help='The percentage of products sold and fulfilled by Amazon'
                type='range'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='FBA Fulfillment (%)'
                help='The percentage of products fulfilled by Amazon'
                type='range'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='FBM Fulfillment (%)'
                help='The percentage of products fulfilled by Merchant'
                type='range'
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <Filter
                title='Shipping Size Tier'
                help='The most prevalent size tier for determining FBA shipping fees'
                type='select'
                items={SHIPPING_SIZE}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Filter
                title='Estimated Search Volume'
                help='The estimated number of times a product was searched for verbatim'
                type='number'
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AdvancedFilters