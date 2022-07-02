'use strict';

const Controller = require('egg').Controller;
class MainController extends Controller {
  async index() {
    this.ctx.body = 'admin api';
  }
  // 检查登录接口
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = `select userName from admin_user where userName='${userName}' and password='${password}'`;
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登录成功', openId, res };
    } else {
      this.ctx.body = { data: '登录失败', res };
    }
  }

  // 获取文章类型的接口
  async getTypeInfo() {
    const sql = 'select typeName as type,id from type';
    const resType = await this.app.mysql.query(sql);
    this.ctx.body = { data: resType };
  }
  // 添加文章
  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    const res = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = res.affectedRows === 1;
    const insertId = res.insertId;
    this.ctx.body = {
      article: tmpArticle,
      res,
      isSuccess: insertSuccess,
      insertId,
    };
    console.log('时间查看', res.data);
  }
  // 更新文章
  async updateArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.update('article', tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    this.ctx.body = {
      isSuccess: updateSuccess,
    };
  }
  // 获取文章列表
  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      "FROM_UNIXTIME(unix_timestamp(article.addTime),'%Y-%m-%d %H:%m:%s') as addTime ," +
      'article.view_count as view_count,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id =type.id ' +
      'ORDER BY article.id DESC';
    const res = await this.app.mysql.query(sql);
    this.ctx.body = { data: res };
  }
  // 删除文章
  async deleteArticle() {
    const id = this.ctx.params.id;
    const res = await this.app.mysql.delete('article', { 'id': id });
    this.ctx.body = { data: res };
  }
  // 修改文章
  // async getArticleById() {
  //   const id = this.ctx.params.id;
  //   const sql = 'SELECT article.id as id,' +
  //     'article.title as title,' +
  //     "FROM_UNIXTIME(article.addTime,'%Y-%m-%d') as addTime," +
  //     'article.view_count as view_count,' +
  //     'type.typeName as typeName ' +
  //     'type.Id as typepId' +
  //     'FROM article LEFT JOIN type ON article.type_id =type.id ' +
  //     'WHERE article.id=' + id;
  //   const result = await this.app.mysql.query(sql);
  //   this.ctx.body = { data: result };
  // }
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      // 'DATE_FORMAT(article.addTime,"%Y-%m-%d") as addTime,' +
      "FROM_UNIXTIME(unix_timestamp(article.addTime),'%Y-%m-%d %H:%m:%s') as addTime ," +
      'article.view_count as view_count,' +
      'article.article_content as article_content,' +
      'type.typeName as typeName,' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id ' +
      'WHERE article.id =' +
      id;
    const res = await this.app.mysql.query(sql);
    this.ctx.body = { data: res };
    console.log(res.data);
  }
  // 获取评论
  async getComment() {
    const sql = 'SELECT comment.content as content,' +
      'article.title as title,' +
      'comment.id as id ' +
      'FROM comment LEFT JOIN article ON comment.article_id=article.id ';
    const res = await this.app.mysql.query(sql);
    this.ctx.body = { data: res };
  }
  // 删除评论
  async deleteComment() {
    const id = this.ctx.params.id;
    const res = await this.app.mysql.delete('comment', { 'id': id });
    this.ctx.body = { data: res };
  }


}

module.exports = MainController;
