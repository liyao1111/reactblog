import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Icon, Affix, Comment, List, Avatar, Form, Input, Button } from "antd";
import { message } from 'antd';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import axios from 'axios';
import marked from 'marked'
import Renderer from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Header from '../components/Header/Header.jsx'
import Para from '../components/Para/Para.jsx';
import Author from '../components/Author/Author.jsx';
import Featured from '../components/Featured/Featured.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Tocify from '../components/Tocify/tocify.tsx';
import serivcePath from '../config/apiUrl.js';
const { TextArea } = Input;

export default function Detail(props) {
  const articleId = props.data[0].id
  const [comment, setComment] = useState('发表评论')
  let dataProps = {
    article_id: articleId,
    content: comment
  }
  const handleComment = () => {
    axios(
      {
        method: 'post',
        url: serivcePath.putCommentById,
        data: dataProps,
        withCredentials: true
      }
    ).then(
      (res) => {
        if (res.data.isSuccess) {
          // console.log('res:', res.data.comment);
          // console.log('dataProps:', dataProps)
          message.success('发布成功')
        }
      }
    )
  }
  const renderer = new marked.Renderer()
  const tocify = new Tocify()
  //  ##text
  renderer.heading = (text, level, raw) => {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  marked.setOptions(
    {
      renderer: renderer,
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartList: true,
      highlight: function (code) {
        return hljs.highlightAuto(code)
      }
    }
  )
  return (
    <div>
      <Head />
      {/* 头部栏 */}
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <title>Home</title>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18}>
          <div>
            <div className="bread-div">
              {/*  // 面包屑导航 */}
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a>   </Breadcrumb.Item>
                <Breadcrumb.Item><a href='/'>文章</a>   </Breadcrumb.Item>
                <Breadcrumb.Item>文章详情 </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className="detailed-title">
              <h2>{props.data[0].title}</h2>
              <div className="list-icon ">
                <span><Icon type='calendar' />{props.data[0].addTime}</span>
                <span><Icon type='folder' />{props.data[0].typename}</span>
                <span> <Icon type='fire' />{props.data[0].view_count}</span>
                <span><Icon type='user'/>{props.data[0].username}</span>
              </div>
              <div className="detailed-content"
                dangerouslySetInnerHTML={{ __html: marked(props.data[0].article_content) }}>
              </div>
            </div>
          </div>
          {/* comment */}
          <List
            className="comment"
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={item => (
              <Comment
                author={<a>游客</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={item.comment}
              />
            )}
          />
          <>
            <Form.Item>
              <TextArea rows={4} onChange={(e) => { setComment(e.target.value) }} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" onClick={handleComment}>
                Add Comment
              </Button>
            </Form.Item>
          </>
          {/* <TextArea rows={4} />
          <Button htmlType="submit"  type="primary">
            Add Comment
          </Button> */}
        </Col>

        <Col className='comm-right' xs={24} sm={24} md={16} lg={18}>
          <Author />
          {/* <Featured/> */}
          <Affix offsetTop={5}>
            <div className='detailed-nav comm-box'>
              <div className='nav-title'>文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>

        </Col>
      </Row>
      <Footer />
    </div>
  )
}
Detail.getInitialProps = async (context) => {
  const { id } = context.query
  console.log('id:', id)
  const promise = new Promise(
    (resolve) => {
      axios(serivcePath.getArticleById + id).then(
        (res) => {
          console.log(res.data)
          resolve(res.data)
        }
      )
    }
  )
  return await promise

}
