
require('dotenv').config();
const {writeFileSync, mkdirSync} = require('fs');

const targetPath = 'src/environments/environment.ts';
const targetPathProd = 'src/environments/environment.prod.ts';

const envFileContent = `
export const environment = {
  mapbox_key: '${process.env['MAPBOX_KEY']}',
  production: false
};
`;

const envFileContentProd = `
export const environment = {
  mapbox_key: '${process.env['MAPBOX_KEY']}',
  production: true
};
`;

mkdirSync('src/environments', {recursive: true});
writeFileSync(`${targetPath}`, envFileContent);

mkdirSync('src/environments', {recursive: true});
writeFileSync(`${targetPathProd}`, envFileContentProd);