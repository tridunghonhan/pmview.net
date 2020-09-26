const express = require('express')
const app = express()
const config = require('config.js')
const port = config.url.port;
const host = config.url.host;

module.exports={
  start: (callback)=>{
    app.head('/', (req, res) => res.status(200).end())
    app.listen(port, host, () => {
      callback()
    })
  }
};