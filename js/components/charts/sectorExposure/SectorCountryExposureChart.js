import React from 'react';
import getChartConfig from '../configs';

import {ReactHighcharts} from '../../../utils/reactHighcharts';
import {mockedData} from './sector-country-data.mock';

import json2csv from 'json2csv';

import './sector-exposure.scss';

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

  downloadCSV () {
    try {
      const result = json2csv({
        data: mockedData.map(({id, name, description, value, marketValue}) => ({id, name, description, value, marketValue})),
        fields: ['id', 'name', 'description', 'value', 'marketValue'],
        fieldNames: ['Sector Id', 'Sector Name', 'Description', 'Value', 'Market Value'],
        del: ';'
      });

      const blob = new Blob([result], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);

      link.setAttribute('href', url);
      link.setAttribute('download', 'sector-country-exposure-chart.csv');
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

        <div className="download-scv-btn no-print" onClick={this.downloadCSV}>
          Export to Excel (CSV file)
        </div>
      </div>
    );
  }
}

export default SectorCountryExposureChart;
