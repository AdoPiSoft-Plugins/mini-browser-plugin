'use strict';
var router = require("./router")

var { app } = require('plugin-core')

module.exports = {
  async init(){
    app.use(router)
  }
}
