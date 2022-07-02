'use strict';
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.default.home.home);
  
  router.get('/default/index', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  router.get('/default/getListById/:id', controller.default.home.getListById);
  router.get('/default/getArticleByKeyWords/:id', controller.default.home.getArticleByKeyWords);
  router.post('/default/putCommentById/', controller.default.home.putCommentById);

};
