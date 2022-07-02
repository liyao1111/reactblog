# Host: localhost  (Version: 5.0.96-community)
# Date: 2022-05-28 21:56:01
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin_user"
#

DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `Id` int(11) NOT NULL auto_increment,
  `userName` varchar(255) default NULL,
  `password` varchar(255) default NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "admin_user"
#

/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'admin','123');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;

#
# Structure for table "article"
#

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `Id` int(11) NOT NULL auto_increment,
  `type_id` int(11) NOT NULL default '0',
  `title` varchar(255) NOT NULL default '',
  `article_content` text NOT NULL,
  `introduce` text,
  `addTime` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `view_count` int(11) default '0',
  `auth_id` int(11) default NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

#
# Data for table "article"
#

/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,1,'react教程','体验 React\r\nReact 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的 React 特性。不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互，还是要开始一个完全由 React 驱动的复杂应用，该章节内容里的链接都能帮你快速开始。\r\n\r\n在线体验\r\n如果你对体验 React 感兴趣，可以尝试在线代码编辑器。从 CodePen，CodeSandbox，或者 Stackblitz 开始一个 React 版本的 Hello World 模板。\r\n\r\n如果你喜欢使用自己的文本编辑器，也可以下载这个 HTML 文件，然后编辑文件内容，最后再用浏览器从本地文件系统打开文件，预览页面效果。注意：这个文件中包含一个低效率的运行时代码转换脚本，所以我们推荐仅在简单的演示项目中使用。\r\n\r\n在网站中添加 React\r\n你可以立即在 HTML 文件中添加 React，然后选择逐渐拓展它的应用范围，或只在一些动态小部件中使用它。\r\n\r\n创建新的 React 应用\r\n当你刚开始一个 React 应用时，通过 HTML 的 script 标签引入 React 依然是最好的选项，因为这能让你的项目立即启动。\r\n\r\n但随着应用越来越大，你可能会需要更加集成化的安装方式。我们推荐了一些 JavaScript 工具链，它们适合大型应用。它们只需很少甚至零配置，就能让你充分利用丰富的 React 生态。立即尝试。\r\n\r\n学习 React\r\n学习 React 的人有着不同的知识背景和学习方式，不管你是理论派还是实践派，我们希望该章节内容对你有帮助。\r\n\r\n如果你喜欢边做边学，请从实践教程开始。\r\n如果你喜欢一步步学习概念，请从 Hello World 开始。\r\n和所有新技术一样，React 也有一条学习曲线。但只要多多实践和保有一点点耐心，你终将掌握它。\r\n','<p>react教程</p>\n','2022-05-21 14:00:12',0,1),(2,1,'next.js教程','要从头开始使用 React 构建一个完整的 Web 应用程序，需要考虑许多重要的细节：\n\n必须使用打包程序（例如 webpack）打包代码，并使用 Babel 等编译器进行代码转换。\n你需要针对生产环境进行优化，例如代码拆分。\n你可能需要对一些页面进行预先渲染以提高页面性能和 SEO。你可能还希望使用服务器端渲染或客户端渲染。\n你可能必须编写一些服务器端代码才能将 React 应用程序连接到数据存储。\n一个 框架 就可以解决上述这些问题。但是，这样的框架必须具有正确的抽象级别，否则它将不是很有用。它还需要具有出色的“开发人员体验”，以确保您和您的团队在编写代码时拥有出色的体验。\n\nNext.js：React 开发框架\n试试 Next.js 吧，这是一个 React 开发框架。Next.js 为上述所有问题提供了解决方案。但更重要的是，它能确保您和您的团队成功地构建 React 应用程序。\n\nNext.js 具有同类框架中最佳的“开发人员体验”和许多内置功能。列举其中一些如下：\n\n直观的、 基于页面 的路由系统（并支持 动态路由）\n预渲染。支持在页面级的 静态生成 (SSG) 和 服务器端渲染 (SSR)\n自动代码拆分，提升页面加载速度\n具有经过优化的预取功能的 客户端路由\n内置 CSS 和 Sass 的支持，并支持任何 CSS-in-JS 库\n开发环境支持 快速刷新\n利用 Serverless Functions 及 API 路由 构建 API 功能\n完全可扩展\nNext.js 被用于数以万计的的网站和 Web 应用程序，包括许多世界上许多最大的品牌都在使用 Next.js。','next.js初始教程','2022-05-21 14:00:13',1,1),(3,1,'markdowm范文','# Markdown syntax guide\r\n\r\n## Headers\r\n\r\n# This is a Heading h1\r\n## This is a Heading h2 \r\n###### This is a Heading h6\r\n\r\n## Emphasis\r\n\r\n*This text will be italic*  \r\n_This will also be italic_\r\n\r\n**This text will be bold**  \r\n__This will also be bold__\r\n\r\n_You **can** combine them_\r\n\r\n## Lists\r\n\r\n### Unordered\r\n\r\n* Item 1\r\n* Item 2\r\n* Item 2a\r\n* Item 2b\r\n\r\n### Ordered\r\n\r\n1. Item 1\r\n1. Item 2\r\n1. Item 3\r\n  1. Item 3a\r\n  1. Item 3b\r\n\r\n## Images\r\n\r\n![This is a alt text.](/image/sample.png \"This is a sample image.\")\r\n\r\n## Links\r\n\r\nYou may be using [Markdown Live Preview](https://markdownlivepreview.com/).\r\n\r\n## Blockquotes\r\n\r\n> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\r\n>\r\n>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\r\n\r\n## Tables\r\n\r\n| Left columns  | Right columns |\r\n| ------------- |:-------------:|\r\n| left foo      | right foo     |\r\n| left bar      | right bar     |\r\n| left baz      | right baz     |\r\n\r\n## Blocks of code\r\n\r\n```\r\nlet message = \'Hello world\';\r\nalert(message);\r\n```\r\n\r\n## Inline code\r\n\r\nThis web site is using `markedjs/marked`.','markdowm范文','2022-05-21 14:00:13',3,1),(23,1,'123','123213','<p>213213</p>\n','2022-05-21 14:00:14',0,1),(24,0,'阿斯顿','阿斯顿撒\nnihao','<p>haha</p>\n','2022-05-21 14:00:15',0,1),(25,1,'123213','213213123','<p>213213</p>\n','2022-05-21 14:00:15',0,1),(26,2,'213213','213213','<p>21321</p>\n','2022-05-21 14:00:16',0,1),(27,1,'123455','134454','<p>11111</p>\n','2022-05-21 14:00:16',0,1),(28,1,'4.21 测试文章','` code`\n##### code','<p>code</p>\n','2022-05-21 14:00:17',0,1),(34,1,'五月二日','## 5.2','<p>二日</p>\n','2022-05-21 14:00:17',0,1),(35,2,'五月四日','时间戳测试','<p>测试</p>\n','2022-05-21 14:00:18',0,1),(36,1,'五月十三（3）','时间戳再次测试','<p>哈哈</p>\n','2022-05-21 14:00:18',0,1),(37,3,'测试评论区','comment','<p>comment</p>\n','2022-05-21 14:00:22',0,1),(38,3,'测试时间戳问题','14：13','<p>时间</p>\n','2022-05-06 00:00:00',0,NULL),(39,1,'git教程','#### 1.初始化仓库\n    git init\n#### 2.添加文件\n    echo ‘内容’ > 文件名\n#### 3.\n    git add     /// git add 是从工作目录到版本库，再从版本库到暂存区\n##### 一个完整流程，至少包含一个git对象；一个树对象；一个提交对象\n##### 一次提交 只会有一个树对象；一个提交对象 ；git对象可以有很多\n### git操作最基本的流程\n    1.创建工作目录，对工作目录修改\n    2.git add ./           将修改添加到暂存区\n        git hash-object -w 文件名 （修改了多少个目录中的文件 此命令就执行多少次）\n        git update-index\n    3. git commit -m \"注释内容\"   将暂存区提交到版本库\n        git write-tree\n        git commit-tree\n### git status：确定文件处于什么状态\n### git diff：查看哪些修改还未暂存\n### git diff --cached：查看暂存区哪些未提交\n### git commit -a：跳过暂存区\n### git commit -a -m \"注释\"\n### mv 文件名 新文件名\n### git log：查看修改日志','<p>git基础</p>\n','2022-05-20 00:00:00',0,NULL),(40,1,'数组方法','### 遍历array方法\n1. map\n2.filter\n3.reduce  \n` arr = [1,2,3,4,5]`  \n` arr.map((item,index,array)=>( ))`  \n  1)  item:数组遍历元素  \n  2) index:  索引\n 3) array: 数组  \n`arr.filter((item)=>(item%2 ==0))  筛选偶数`  \n 筛选满足条件的元素  \n`arr.reduce((pre,cur)=>(return pre+cur))  返回数组之和`  \n\n\n ','<p>array三种遍历方法</p>\n','2022-05-26 00:00:00',0,0);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

#
# Structure for table "comment"
#

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `Id` int(11) NOT NULL auto_increment,
  `article_id` int(11) NOT NULL default '0',
  `content` text,
  `create_time` date default NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

#
# Data for table "comment"
#

/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (25,37,'哈哈哈哈哈',NULL),(26,36,'五月十八日',NULL),(27,38,'时间正确',NULL);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

#
# Structure for table "type"
#

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `Id` int(11) NOT NULL auto_increment,
  `typeName` varchar(255) default NULL,
  `orderNum` int(11) default NULL,
  `icon` varchar(255) default NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "type"
#

/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'文章',1,'message'),(2,'视频',2,'youtube'),(3,'生活',3,'smile');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
