let ipUrl = 'http://127.0.0.1:7001/admin/'
let servicePath = {
    checkLogin:ipUrl+'checkLogin', //检查登陆 
    getTypeInfo:ipUrl+'getTypeInfo',//文章类别
    addArticle:ipUrl+'addArticle', //添加文章
    updateArticle:ipUrl+'updateArticle' ,// 修改文章
    getArticleList:ipUrl+'getArticleList', // 文章列表
    deleteArticle:ipUrl+'deleteArticle/',// 删除文章
    getArticleById:ipUrl+'getArticleById/',//根据id获得文章详情
    getComment:ipUrl+'getComment/', //获取评论
    deleteComment:ipUrl+'deleteComment/',// 删除评论

    
}

export default servicePath