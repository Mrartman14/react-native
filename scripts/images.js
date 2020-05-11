const fs = require('fs');

const ImageFileNames = () => {
  const array = fs
    .readdirSync('assests/images') //<------------------------ путь
    .filter(file => file.endsWith('png')) //<----------------- расширение файла
    .map(file => file.replace('02x.png', '').replace('03x.png', ''));
  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map(name => `${name}: require('./images/${name}.png')`)
    .join(',\n ');
  const string = `
          const images = {
            ${properties}
          };

          export default images;
        `;

  fs.WriteFileSync('assets/images.js', string, 'utf8'); //<---- путь
};

/*
	после донастройки этого файла добавить в основной package.json
	"scripts": {
		...
		"images": "node scripts/images.js"
	}
*/
