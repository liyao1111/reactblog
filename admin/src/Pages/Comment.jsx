import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { List, Row, Col, message, Button } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import '../static/CSS/Comment.css'

const Comment = () => {
    let data = []
    let [list, setList] = useState([])

    useEffect(() => {
        getList()
    }, [])
    const getList = () => {
        axios({
            method: 'get',
            url: servicePath.getComment,
        }).then(
            (res) => {
                res.data.data.map((item) => {
                    return item
                })
                console.log('data:', data)
                setList(res.data.data)
                console.log('list:', list)
            }
        )
    }
    const deleteComment = (id) => {
        const confirmDel = confirm('确认删除此条评论？')
        if (confirmDel) {
            axios({
                method: 'get',
                url: servicePath.deleteComment + id,
                withCredentials: true
            }).then(() => {
                message.success('评论删除成功')
                getList()
            })

        } else {
            message.success('取消删除')
        }
    }
    return (
        <div>
            <List
                header={
                    <Row className='list-div'>
                        <Col span={16}><b>评论内容</b></Col>
                        <Col span={4}><b>文章标题</b></Col>
                        <Col span={4}><b>操作</b></Col>
                    </Row>
                }
                bordered
                pagination={
                    {
                        onChange: (page) => {
                            console.log(page);
                        }, pageSize: 10,
                    }}
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className="list-div">
                            <Col span={16}>{item.content}</Col>
                            <Col span={4}>{item.title}</Col>
                            <Col span={4}>

                                <Button onClick={() => { deleteComment(item.id) }} >
                                    删除
                                </Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div >
    );
}

export default Comment;
