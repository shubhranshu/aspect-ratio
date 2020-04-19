import ratios from './data/ratios.json';

class AspectRatio {
  constructor(x = 0, y = 0) {
    if (x !== 0 && y !== 0) {
      ratios.forEach((ratio) => {
        let decimal = (1.0 * x) / y;
        const calcRatio = Math.round(decimal * 100)/100;
        if(calcRatio == ratio.numeric){
          this[`is${ratio.friendly}`] = true;
        }
      });
    }
  }
}

export { AspectRatio };
