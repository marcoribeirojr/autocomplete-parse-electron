'use strict'

const query = (model, parseObject) => {
  if(model === undefined || typeof model !== 'string' || parseObject === undefined || typeof parseObject !== 'object'){
    return;
  }
  const Model = parseObject.Object.extend(model);
  const newQuery = new parseObject.Query(Model);  
  return newQuery;
}

module.exports = query;
