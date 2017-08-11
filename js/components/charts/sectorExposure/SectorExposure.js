import React, {Component} from 'react';
import getChartConfig from '../configs';

import json2csv from 'json2csv';

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

  downloadCSV () {
    try {
      const result = json2csv({
        data: mockedData.map(({y, name, description, marketValue}) => ({y, name, description, marketValue})),
        fields: ['y', 'name', 'description', 'marketValue'],
        fieldNames: ['Value', 'Sector Name', 'Description', 'Market Value'],
        del: ';'
      });

      const blob = new Blob([result], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);

      link.setAttribute('href', url);
      link.setAttribute('download', 'sector-exposure-chart.csv');
      link.style.visibility = 'hidden';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
    }
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

        <div className="download-scv-btn no-print" onClick={this.downloadCSV}>
          Export to Excel (CSV file)
        </div>
      </div>
    );
  }
}

export default SectorExposureChart;
