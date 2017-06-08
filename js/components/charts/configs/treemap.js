import numeral from 'numeral';

const treemap = options => {
  const {
    // color = '#60aa64',
    data = [],
    click = ({point}) => console.log('You clicked on ', point.name),
    dataLabelsEnabled: enabled = true,
    inModal = false
  } = options;

  return {
    chart: {
      height: !inModal ? 300 : null
    },
    plotOptions: {
      series: {
        cursor: 'pointer'
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      allowDrillToNode: true,
      // color,
      dataLabels: {
        align: 'left',
        verticalAlign: 'top',
        enabled,
        crop: true,
        overflow: true,
        formatter() {
          return `<b>${this.point.description}</b> (${this.point.name})<br />
                <i>Share</i>: <b>${numeral(this.point.value).format('0.00')}%</b>`;
        }
      },
      tooltip: {
        pointFormatter() {
          return `<b>${this.description}</b> (${this.name})<br />
                <i>Market Value<i>: <b>${numeral(this.marketValue).format('0,0.00')}</b><br />
                <i>Share</i>: <b>${numeral(this.value).format('0.00')}%</b>`;
        }
      },
      levelIsConstant: false,
      levels: [{
        level: 1,
        dataLabels: {
          enabled: true
        },
        borderWidth: 3
      }],
      data,
      point: {
        events: {
          click
        }
      }
    }],
    title: null
  };
};

export default treemap;
