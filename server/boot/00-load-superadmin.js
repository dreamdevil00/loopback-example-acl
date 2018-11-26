'use strict';
const path = require('path');
const config = require(path.join(__dirname, '../../config'));
module.exports = function(app) {
  const superadmin = {
    username: 'superadmin',
    password: 'Passw0rd',
  };

  const roleData = {
    name: 'superadmin',
    displayName: '超级管理员',
    description: '拥有不受访问限制的权限',
  };

  async function initSuperAdmin() {
    try {
      await app.dataSources.devMySql.transaction(async models => {
        try {
          const {SysUser, SysRole} = models;

          const user = await SysUser.create(superadmin);
          console.log('Created user:', JSON.stringify(user));
          const role = await SysRole.create(roleData);
          console.log('Created role:', JSON.stringify(role));
          const principal = await role.principals.create({
            principalType: 'USER',
            principalId: user.id,
          });
          console.log('Created principal:', JSON.stringify(principal));
        } catch (e) {
          throw e;
        }
      });
    } catch (e) {
      throw e;
    }
  }

  if (config.initDB) {
    initSuperAdmin().catch(e => {
      console.error(e);
    });
  }
};
