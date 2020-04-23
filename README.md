# Aspect ratios

Calculate aspect rations based on the dimension provided.

![Build](https://github.com/shubhranshu/aspect-ratio/workflows/Build/badge.svg)

[NPM Package](https://www.npmjs.com/package/@stubbydigits/aspect-ratio)

## Usage

Library exports a single function `calculateRatio(x, y)` which returns the result object.
x and y are numbers.

Use dist folder for non es6 projects. 

### Result object

The program returns an object with two properties of the type

```javascript
  {
    match : {},
    sortedRatios : [],
  }
```

- ```match``` : Calculated aspect ratio if any, exact match
- ```sortedRatios``` : List of aspect ratios ordered by proximity to the original dimensions

#### Result format

Result for both match and sortedRatios is of the following format

```javascript
{
  name: "19by16", // usable name for program literals
  ratio: "19:16", // Common name for the aspect ratio, if any
  proximity : "0.123", // ascending numeric valu to represent closeness to the dimensions provided
  description: "Sometimes referred to as the Movietone ratio, this ratio was used briefly during the transitional period when the film industry was converting to sound, from 1926 to 1932 approx. It is produced by superimposing an optical soundtrack over a full-gate 1.3 aperture in printing, resulting in an almost square image. Films shot in this ratio are often projected or transferred to video incorrectly using a 1.37 mask or squashed to 1.37. Examples of films shot in the Movietone ratio include Sunrise, M, Hallelujah! and The Lighthouse."
  // Description for the aspect ratio, usages and history.
}
```
