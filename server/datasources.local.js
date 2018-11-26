'use strict';
const path = require('path');
const config = require(path.join(__dirname, '../config'));

const mysqlCfg = config.mysql;
module.exports = {
  db: {
    name: 'db',
    connector: 'memory',
  },
  devMySql: {
    charset: 'utf8mb4',
    timeZone: 'Z', // UTC 时间
    host: mysqlCfg.host,
    port: mysqlCfg.port,
    database: mysqlCfg.database,
    password: mysqlCfg.password,
    name: 'devMySql',
    user: mysqlCfg.user,
    connector: 'mysql',
  },
};
