import React from 'react';
import getChartConfig from '../configs';

import {ReactHighcharts} from '../../../utils/reactHighcharts';
import {mockedData} from './sector-country-data.mock';

class SectorCountryExposureChart extends React.Component {
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
      dataLabelsEnabled: false,
      color: 'rgb(96,170,100)',
      data: mockedData
    };

    const config = getChartConfig('treemap', options);
    const {useTheme} = this.state;

    return (
      <div className={ useTheme ? 'theme-example' : ''}>
        <h1>Sector Country Exposure</h1>
        <h3 className="theme-toggle-btn"
            onClick={ this.toggleTheme.bind(this) }>Click me to change them!</h3>

        <ReactHighcharts
          ref={this.getRef.bind(this)}
          config={config}
          domProps={{className: 'highcharts-dom-wrapper'}} />
      </div>
    );
  }
}

export default SectorCountryExposureChart;
