// radiusUtils.js

// Function to convert degrees to radians
const toRadians = (deg) => deg * (Math.PI / 180);

// Squircle function to generate coordinates
const squircle = (radiusX, radiusY) => (theta) => ({
  x: Math.pow(Math.abs(Math.cos(theta)), 2 / radiusX) * 50 * Math.sign(Math.cos(theta)) + 50,
  y: Math.pow(Math.abs(Math.sin(theta)), 2 / radiusY) * 50 * Math.sign(Math.sin(theta)) + 50,
});

// Function to generate squircle CSS values
const generateSquircleCSS = (radiusX, radiusY, numPoints = 360) => {
  const angles = new Array(numPoints).fill(0).map((x, i) => i).map(toRadians);

  const squircleCoordinates = angles.map(squircle(radiusX, radiusY));

  return squircleCoordinates
    .map(({ x, y }) => ({
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
    }))
    .map(({ x, y }) => `${x}% ${y}%`)
    .join(", ");
};

const predefinedRadiusValues = {
  "radius-size-1": { x: 1, y: 1 },
  "radius-size-2": { x: 2, y: 2 },
  "radius-size-4": { x: 4, y: 4 },
  "radius-size-8": { x: 8, y: 8 },
  "radius-size-12": { x: 12, y: 12 },
  "radius-size-20": { x: 20, y: 20 },
  "radius-size-24": { x: 24, y: 24 },
  "radius-size-32": { x: 32, y: 32 },
  "radius-size-40": { x: 40, y: 40 },
  "radius-size-48": { x: 48, y: 48 },
  "radius-size-56": { x: 56, y: 56 },
  "radius-size-64": { x: 64, y: 64 },
  "radius-size-72": { x: 72, y: 72 },
  "radius-size-80": { x: 80, y: 80 },
};

const radius = ({ x: radiusX, y: radiusY }) => ({
  clipPath: `polygon(${generateSquircleCSS(radiusX, radiusY)})`,
});

const calculateDynamicRadii = (width, xToYProportion = 4) => {
  const radiusX = width / (1 + xToYProportion);
  const radiusY = radiusX * xToYProportion;
  return { x: radiusX, y: radiusY };
};

// Function to generate squircle CSS values with dynamic radii
const generateDynamicSquircleCSS = (width, xToYProportion = 4, numPoints = 360) => {
  const dynamicRadii = calculateDynamicRadii(width, xToYProportion);
  return generateSquircleCSS(dynamicRadii.x, dynamicRadii.y, numPoints);
};

// Function to generate dynamic squircle clip path
const dynamicRadius = (width, xToYProportion = 4) => ({
  clipPath: `polygon(${generateDynamicSquircleCSS(width, xToYProportion)})`,
});

export {
  toRadians,
  squircle,
  generateSquircleCSS,
  calculateDynamicRadii,
  generateDynamicSquircleCSS,
  dynamicRadius,
  predefinedRadiusValues,
  radius,
};
