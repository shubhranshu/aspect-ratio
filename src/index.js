import ratios from './data/ratios.json';

const validateXandY = (x, y) => {
  if (!x === 0 || y === 0) {
    throw new Error('Dimensions must be valid numeric values greater than Zero');
  }
};

const calculateRatio = (x, y) => {
  x = Math.abs(x >>> 0);
  y = Math.abs(y >>> 0);
  validateXandY(x, y);

  let decimalRatio = (1.0 * x) / y;
  const calcRatio = Math.round(decimalRatio * 100) / 100;
  let match = {};

  ratios.forEach((ratio) => {
    ratio.proximity = Math.abs(Math.round((ratio.numeric - calcRatio) * 100) / 100);
    delete ratio.numeric;
    // delete ratio.description;
    delete ratio.alias;
  });

  let sortedRatios = ratios.sort((a, b) => {
    return a.proximity - b.proximity;
  });

  if (sortedRatios[0].proximity === 0) {
    match = sortedRatios[0];
  }

  return {
    match,
    sortedRatios,
  };
};

export { calculateRatio };
