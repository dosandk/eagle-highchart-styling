import numeral from 'numeral';


const pie = options => {
  const {
    data = [],
    click = ({point}) => console.log('You clicked on ', point.name),
    inModal = false
  } = options;

  return {
    chart: {
      type: 'pie',

      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,

      height: !inModal ? 400 : null
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        center: ['50%', '50%'],
        allowPointSelect: false
      },
      series: {
        cursor: 'pointer',
        point: {
          events: {}
        }
      }
    },
    title: null,
    tooltip: {
      formatter() {
        return `<b>${this.point.description}</b><br />
            <i>Market Value<i>: <b>${numeral(this.point.marketValue).format('0,0.00')}</b><br />
            <i>Share</i>: <b>${numeral(this.y).format('0.00%')}</b>`;
      }
    },
    series: [
      {
        name: 'Sector Exposure',
        point: {
          events: {
            click,
            select() {
              // to be populated
            },
            unselect() {
              // to be populated
            }
          }
        },
        data// to be populated
      }
    ]
  };
};

export default pie;
