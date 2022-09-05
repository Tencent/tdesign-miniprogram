const path = require('path');
const fs = require('fs');

const iconFile = path.join(__dirname, '..', 'src/icon/icon.less');
const dataFile = path.join(__dirname, '..', 'src/icon/_example/data.js');
fs.readFile(iconFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const regex = new RegExp(`\\..*-icon-(.*):before`, 'g');
  const icons = data.match(regex);
  const iconList = icons.map((icon) => icon.replace(regex, '$1'));
  const iconsData = `const icons = ${JSON.stringify(iconList, null, 2)}; \nexport default icons;\n`;
  fs.writeFile(dataFile, iconsData, (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log('update icons success!');
});
