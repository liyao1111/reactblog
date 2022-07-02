import React from 'react';
import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    // TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import AddAritcle from './AddAritcle';
import ArticleList from './ArticleList';
import Comment from './Comment';
import '../static/CSS/AdminIndex.css'


const AdminIndex = (props) => {
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false)
    // const[url,setUrl] = useState('/')
    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };
    const handleClickArticle = e => {
        if (e.key === 'addArticle') {
            // window.location.replace('/index/add')  
            props.history.push('/index/add')
            console.log('props"', props)
            window.location.reload()
        } else if (e.key === 'articleList') {
            // window.location.replace('/index/list')
            props.history.push('/index/list')
            console.log('props"', props.location)
            window.location.reload()
        } else if (e.key === '9' ) {
            props.history.push('/index/comment')
            window.location.reload()
        }
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClickArticle}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <span>博客后台管理系统</span>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <span>添加文章</span>
                    </Menu.Item>

                    <SubMenu key="sub1"
                        icon={<UserOutlined />}
                        title={
                            <span>
                                <icon type='user' />
                                <span>文章管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="addArticle">添加文章</Menu.Item>
                        <Menu.Item key="articleList">文章列表</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="9" icon={<FileOutlined />} title='留言管理'>
                        留言管理
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div key={props.location.key}>

                            {/* <Route path='/index' exact element={AddAritcle} />
                            <Route path='/index/add' exact element={AddAritcle} />
                            <Route path='/index/list' exact element={ArticleList} />
                            <Route path='/index/add/:id' exact element={AddAritcle} /> */}

                            <Route path='/index' exact component={AddAritcle} />
                            <Route path='/index/add' exact component={AddAritcle} />
                            <Route path='/index/list' exact component={ArticleList} />
                            <Route path='/index/add/:id' exact component={AddAritcle} />
                            <Route path='/index/comment' exact component={Comment} />


                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Blog_Stystem ©2022 Created by 李垚</Footer>
            </Layout>
        </Layout>
    );
}

export default AdminIndex;

