import React from 'react'
import { useState, useEffect } from 'react'
import { List, Row, Col, Modal, message, Button } from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import '../static/CSS/ArticleList.css'


export default function ArticleList(props) {
    const [list, setList] = useState([])
    useEffect(() => {
        getList()
    }, [])
    //获取文章列表
    const getList = () => {
        axios({
            method: 'get',
            url: servicePath.getArticleList,
            withCredentials: true,
        }).then(res => {
            // console.log('data', res.data.data)
            setList(res.data.data)
            console.log('list:',list)
        })
    }
    // 删除文章
    const deleteArticle = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const confirmDel = confirm('确认删除？');
        if (!confirmDel) {
            message.success('取消删除')
        } else {
            axios({
                method: 'get',
                url: servicePath.deleteArticle + id,
                withCredentials: true,
            }).then(() => {
                message.success('文章删除成功')
                getList()
            })
        }
    }
    //修改文章
    const updateArticle = (id) => {
        // window.location.replace('/index/add/'+id)
        props.history.push('/index/add/'+id)
        window.location.reload()
    
    }

    useEffect(() => {
        getList()
        // console.log('list', list)
    }, [])
    return (
        <div>
            <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>
                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                // List分页
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 10,
                  }}
                renderItem={item => (
                    <List.Item>
                        <Row className="list-div">
                            <Col span={8}>{item.title}</Col>
                            <Col span={4}>{item.typeName}</Col>
                            <Col span={4}>{item.addTime}</Col>
                            <Col span={4}>{item.view_count}</Col>
                            <Col span={4}>
                                <Button type="primary" onClick={() => { updateArticle(item.id) }}>
                                    修改
                                </Button>&nbsp;
                                <Button onClick={() => { deleteArticle(item.id) }} >
                                    删除
                                </Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )
}
