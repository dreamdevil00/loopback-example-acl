'use strict';

const app = require('../server/server');
const ds = app.dataSources.devMySql;

async function updateDb() {
  try {
    await ds.autoupdate();
    await ds.disconnect();
    console.log('DB update finished!');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

updateDb();
