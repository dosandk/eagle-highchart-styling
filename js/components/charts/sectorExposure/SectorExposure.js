import React, {Component} from 'react';
import getChartConfig from '../configs';

import { ReactHighcharts } from '../../../utils/reactHighcharts';
import {mockedData} from './sector-data.mock';

class SectorExposureChart extends Component {
  constructor(...args) {
    super(args);

    this.state = {
      useTheme: false
    };
  }

  getRef(node) {
    return !node ? null : node.getChart();
  }

  toggleTheme() {
    this.setState(({useTheme}) => {
      return {useTheme: !useTheme};
    });
  }

  render() {
    const options = {
      data: mockedData
    };
    const config = getChartConfig('pie', options);
    const {useTheme} = this.state;

    return (
      <div className={ useTheme ? 'theme-example' : ''}>
        <h1>Sector Exposure</h1>
        <h3 className="theme-toggle-btn"
            onClick={ this.toggleTheme.bind(this) }>Click me to change them!</h3>

        <ReactHighcharts
          ref={this.getRef}
          config={config}
          domProps={{className: 'highcharts-dom-wrapper'}} />
      </div>
    );
  }
}

export default SectorExposureChart;
