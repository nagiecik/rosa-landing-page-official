// generateIconsData.js
const fs = require('fs');
const path = require('path');

const iconsFolderPath = path.join(__dirname, 'public', 'icons', 'sports');

const iconsData = fs.readdirSync(iconsFolderPath)
  .filter(file => file.endsWith('.svg'))
  .map(filename => ({
    iconUrl: `/icons/sports/${filename}`,
  }));

fs.writeFileSync(path.join(__dirname, 'src', 'iconsData.js'), `export default ${JSON.stringify(iconsData)};`);
