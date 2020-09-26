const config = require('config.js');

module.exports={
  baseURL: ()=>{
    let baseURL=config.url.scheme+"://";
    baseURL += config.url.host;
    baseURL += (config.url.port === undefined)?"":":"+config.url.port
    return baseURL;
  }

}