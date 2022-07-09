const fs = require('fs');
const watch = require('node-watch');
const { basename } = require('path');

const onFileChange = (file) => {
  if (file.endsWith('.json')) {
    fs.readFile(file, 'utf8', (err, jsonData) => {
      if (!err) {
        const fileName = basename(file, '.json');
        const sectionFile = `shopify/sections/${fileName}.liquid`;
        if (fs.existsSync(sectionFile)) {
          const content = fs.readFileSync(sectionFile, 'utf8');
          const replaceableSchemaRegex =
            /(?<={% schema %}\s*).*?(?=\s*{% endschema %})/gs;

          if (replaceableSchemaRegex.test(content)) {
            const newContent = content.replace(
              replaceableSchemaRegex,
              `\n${jsonData.trim()}`,
            );
            fs.writeFile(
              sectionFile,
              newContent,
              {
                encoding: 'utf8',
                flag: 'w',
              },
              (err) => {
                if (err) {
                  console.log(err);
                } else {
                  console.info(`${sectionFile} updated`);
                }
              },
            );
          }
        }
      }
    });
  }
};
watch(
  'sections-schema',
  {
    filter: (file) => file.endsWith('.json'),
  },
  (event, filename) => {
    switch (event) {
      case 'update':
        onFileChange(filename);
        break;
      default:
        break;
    }
  },
);
