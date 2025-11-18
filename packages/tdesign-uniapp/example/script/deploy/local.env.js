const path = require('path');

function readLocalEnv() {
  const configPath =  path.resolve(process.cwd(), './.env.local');
  require('dotenv').config({ path: configPath });
}

module.exports = readLocalEnv;
