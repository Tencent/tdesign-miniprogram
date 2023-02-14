const glob = require('glob');
const fs = require('fs');
const path = require('path');

glob('src/**/*.md', (err, files) => {
  if (err) {
    console.log(err);
  }

  const handler = (file) => {
    const filePath = path.resolve(__dirname, '..', file);
    const content = fs.readFileSync(filePath, { encoding: 'utf8' });
    const splitContent = content.split('\n');

    splitContent.forEach((content, index) => {
      if (/custom-style/.test(content)) {
        splitContent.splice(index, 1);
      }
    });

    fs.writeFileSync(filePath, splitContent.join('\n'));
    console.log(filePath);
  };
  files.forEach(handler);
});
