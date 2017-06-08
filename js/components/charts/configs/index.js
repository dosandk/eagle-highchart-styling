import treemap from './treemap';
import pie from './pie';

function getChartConfig(type, options = {}) {
  const configs = {
    pie,
    treemap
  };

  const currentConfig = configs[type];

  return typeof currentConfig === 'function' ? currentConfig(options) : Object.assign({}, currentConfig, options);
}

export default getChartConfig;
