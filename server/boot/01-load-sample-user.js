'use strict';
const path = require('path');
const config = require(path.join(__dirname, '../../config'));
module.exports = function(app) {
  const userData = [
    {
      username: 'Bob',
      password: 'Passw0rd',
    },
  ];

  async function initUserData() {
    try {
      await app.dataSources.devMySql.transaction(async models => {
        try {
          const {SysUser} = models;
          const res = await SysUser.create(userData);
          console.log('Created user:', JSON.stringify(res));
        } catch (e) {
          throw e;
        }
      });
    } catch (e) {
      throw e;
    }
  }

  if (config.loadSampleUser) {
    initUserData().catch(e => {
      console.error(e);
    });
  }
};
