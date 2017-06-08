import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import withDrilldown from 'highcharts/modules/drilldown';
import withTreemap from 'highcharts/modules/treemap';


withTreemap(Highcharts);
withDrilldown(Highcharts);

export {
  ReactHighcharts,
  Highcharts
};
