'use strict';

const env = process.env;
const initDB = env['INIT_DB'] === 'true';

module.exports = {
  initDB,
  loadSampleUser: env['LOAD_SAMPLE_USER'] === 'true',
  mysql: {
    host: env['MYSQL_HOST'],
    port: env['MYSQL_PORT'] ? +env['MYSQL_PORT'] : 3306,
    user: env['MYSQL_USER'],
    password: env['MYSQL_PASSWORD'],
    database: env['MYSQL_DATABASE'],
  },
};
