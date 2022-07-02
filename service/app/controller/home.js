'use strict';

const Controller = require('egg').Controller;
class MainController extends Controller {
  async index() {
    this.ctx.body = '博客中台';
  }

}

module.exports = MainController;
