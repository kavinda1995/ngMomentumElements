const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/momentum-elements/runtime.js',
    './dist/momentum-elements/polyfills.js',
    './dist/momentum-elements/scripts.js',
    './dist/momentum-elements/main.js',
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/momentum-elements.js');
  await fs.copyFile(
    './dist/momentum-elements/styles.css',
    'elements/styles.css'
  );
  console.log('Packaging Completed');
})();
