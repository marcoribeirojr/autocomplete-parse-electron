'use strict'

const Parse = require('parse/node');

const server = (appId, jsKey, serverURL) => {

  if(appId === undefined || jsKey === undefined || serverURL === undefined){
    return;
  }
  else if (typeof appId !== 'string' || typeof jsKey !== 'string' || typeof serverURL !== 'string'){
    return;
  }

  Parse.initialize(appId, jsKey);
  Parse.serverURL = serverURL;

  return Parse;
  
};
module.exports = server;
