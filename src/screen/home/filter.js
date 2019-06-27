import React, { Component } from 'react';
import _ from 'lodash'

import { TitleGroup } from './component'
import {
  ChipControl,
  NumberInputControl,
  SelectControl,
  RangeControl
} from './control'

export class Filter extends Component {
  renderControlWithType = (type, items) => {
    switch (type) {
      case 'chip':
        return <ChipControl />
      case 'number':
        return <NumberInputControl />
      case 'select':
        return <SelectControl items={items} />
      case 'range':
          return <RangeControl />
      default:
        break;
    }
  }
  render() {
    const { title, help, type, items } = this.props;
    return (
      <div>
        <TitleGroup text={title} help={help} />
        {!!type && this.renderControlWithType(type, items)}
      </div>
    );
  }
}