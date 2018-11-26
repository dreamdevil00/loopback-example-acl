'use strict';
const HttpErrors = require('http-errors');
const _ = require('lodash');
module.exports = function(Metadata) {
  const blackList = [Metadata.modelName];
  Metadata.modelList = function modelList(options) {
    options = options || {};
    const modelNames = Object.keys(Metadata.app.models);
    const models = Metadata.app.models;
    const publicModels = [];

    modelNames.forEach(model => {
      const modelName = models[model].modelName;
      const notExist = publicModels.indexOf(modelName) === -1;
      const notInBlackList = blackList.indexOf(modelName) === -1;
      const isShared = models[modelName].shared;
      if (notExist && notInBlackList && isShared) {
        publicModels.push(modelName);
      }
    });

    return new Promise((resolve, reject) => {
      process.nextTick(() => {
        resolve(publicModels);
      });
    });
  };
  Metadata.remoteMethod('modelList', {
    accepts: {arg: 'options', type: 'object', http: 'optionsFromRequest'},
    description: '获取 public 模型列表',
    returns: {arg: 'result', type: 'array', root: true},
    http: {
      verb: 'get',
      status: 201,
      errorStatus: 400,
    },
  });

  Metadata.propertyList = async function propertyList(modelName, options) {
    try {
      options = options || {};
      const model = Metadata.app.models[modelName];

      if (!model) {
        throw new HttpErrors.NotFound(`未找到模型 ${modelName}`);
      }

      const properties = _.keys(model.definition.properties);
      const relations = _.keys(model.relations);

      const builtInMethodsWhiteList = [
        'bulkUpdate',
        'count',
        'create',
        'deleteAll',
        'deleteById',
        'exists',
        'find',
        'findById',
        'findByIds',
        'findLastChange',
        'findOne',
        'findOrCreate',
        'patchOrCreate',
        'patchOrCreateWithWhere',
        'upsert',
        'upsertWithWhere',
        'updateOrCreate',
        'updateLastChange',
        'udpateAll',
        'update',
        'replacate',
        'replaceOrCreate',
        'replaceById',
        'rectifyChange',
        'rectifyAllChanges',
      ];

      return {
        properties,
        relations,
        methods: builtInMethodsWhiteList,
      };
    } catch (e) {
      throw e;
    }
  };
  Metadata.remoteMethod('propertyList', {
    accepts: [
      {
        arg: 'modelName',
        type: 'string',
        required: true,
      },
      {
        arg: 'options',
        type: 'object',
        http: 'optionsFromRequest',
      },
    ],
    description: '获取 模型 的 所有属性(包括属性、方法、scope 和 关系)',
    http: {
      verb: 'get',
    },
    returns: {arg: 'result', type: 'array', root: true},
  });
};
