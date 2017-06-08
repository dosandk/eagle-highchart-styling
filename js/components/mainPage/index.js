import React from 'react';
import SectorCountryExposureChart from '../../components/charts/sectorExposure/SectorCountryExposureChart';
import SectorExposureChart from '../../components/charts/sectorExposure/SectorExposure';

const mainPage = () => {
  return (
    <div>
      <SectorCountryExposureChart/>
      <SectorExposureChart/>
    </div>
  );
};

export default mainPage;
