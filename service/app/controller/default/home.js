'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // async home() {
  //   this.ctx.body = 'home';
  // }
  async index() {
    this.ctx.body = 'default hi';
  }
  async getArticleList() {
    // select article.id as id,article.title as title,article.introduce as introduce,article.addTime as addTime,article.view_count as view_count,type.typeName as typename from article left join type on article.type_id=type.Id
    // eslint-disable-next-line no-useless-concat
    const sql = "select article.id as id,article.title as title,article.introduce as introduce,FROM_UNIXTIME(unix_timestamp(article.addTime),'%Y-%m-%d') as addTime ,article.view_count as view_count,article.type_id,type.typeName as typename from article left join type on article.type_id=type.Id  order by article.ID desc";
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }

  // 详情页接口
  async getArticleById() {
    const id = this.ctx.params.id;
    // const sql =
    //   'SELECT article.id as id,' +
    //   'article.title as title,' +
    //   'article.introduce as introduce,' +
    //   'article.article_content as article_content,' +
    //   'article.view_count as view_count,' +
    //   "FROM_UNIXTIME(unix_timestamp(article.addTime),'%Y-%m-%d') as addTime ," +
    //   'type.typeName as typename ' +
    //   'FROM article LEFT JOIN type ON article.type_id=type.id ' +
    //   'WHERE article.id=' +
    //   id;
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      'article.view_count as view_count,' +
      'comment.content as comment,' +
      "FROM_UNIXTIME(unix_timestamp(article.addTime),'%Y-%m-%d') as addTime ," +
      'type.typeName as typename, ' +
      'admin_user.userName as username ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id LEFT JOIN comment ON article.id=comment.article_id  ' +
      'LEFT JOIN admin_user ON article.auth_id=admin_user.id ' +
      'WHERE article.id=' +
      id;
    const res = await this.app.mysql.query(sql);
    this.ctx.body = { data: res };
  }
  // 发表评论
  async putCommentById() {
    const tmpComment = this.ctx.request.body;
    console.log(tmpComment);
    // const sql = `INSERT INTO comment VALUES(${tmpComment.articlearticle_id},${tmpComment.content})`;
    // const res = await this.app.mysql.query(sql);
    const res = await this.app.mysql.insert('comment', tmpComment);
    const insertSuccess = res.affectedRows === 1;
    this.ctx.body = {
      comment: tmpComment,
      res,
      isSuccess: insertSuccess,
    };
  }
  // 获得类别名称和编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = { data: result };
  }
  // 根据类别id获得文章列表
  async getListById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "FROM_UNIXTIME(unix_timestamp(article.addTime),'%Y-%m-%d ') as addTime ," +
      'article.view_count as view_count,' +
      'type.typeName as typename ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id ' +
      'WHERE type_id=' + id;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };

  }
  // 查询包含特定关键词文章
  async getArticleByKeyWords() {
    const keyWords = this.ctx.params.id;
    const sql = 'select article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content, ' +
      "FROM_UNIXTIME(unix_timestamp(article.addTime),'%Y-%m-%d ') as addTime ," +
      'article.view_count as view_count,' +
      'type.typeName as typename ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id ' +
      'where article.title like ' +
      `'%${keyWords}%'`;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };

  }
}


module.exports = HomeController;
