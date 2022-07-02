let ipUrl = 'http://127.0.0.1:7001/default/'
let serivcePath = {
    getArticleList: ipUrl + 'getArticleList', //首页接口
    getArticleById: ipUrl + 'getArticleById/' ,// 获取文章详细页接口
    getTypeInfo:ipUrl +'getTypeInfo/', // 文章类别接口
    getListById:ipUrl+'getListById/', // 根据类别获取文章
    getArticleByKeyWords:ipUrl+'getArticleByKeyWords/',// 搜索获得文章
    putCommentById:ipUrl+'putCommentById/',// 添加评论

}
export default serivcePath  