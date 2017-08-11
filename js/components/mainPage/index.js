import React, {Component} from 'react';
import SectorCountryExposureChart from '../../components/charts/sectorExposure/SectorCountryExposureChart';
import SectorExposureChart from '../../components/charts/sectorExposure/SectorExposure';

import './main-page.scss';

class MainPage extends Component {
  constructor () {
    super();

    this.print = this.print.bind(this);
  }

  print () {
    const pageTitle = document.title;
    const documentTitle = 'Sector Country Exposure chart';

    document.title = documentTitle;
    window.print();
    document.title = pageTitle;
  }

  render () {
    return (
      <div>
        <div className="print-btn no-print" onClick={ this.print }>
          Print & Export as PDF
        </div>
        <SectorCountryExposureChart/>
        <div className="page-break hidden"/>
        <SectorExposureChart/>
      </div>
    );
  }
}

export default MainPage;
