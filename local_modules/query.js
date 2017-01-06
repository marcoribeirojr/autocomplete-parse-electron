'use strict'

const query = (model, parseObject) => {
  if(model === undefined || typeof model !== 'string' || parseObject === undefined || typeof parseObject !== 'object'){
    return;
  }
  const newQuery = new parseObject.Query();
  return newQuery;
}

module.exports = query;
