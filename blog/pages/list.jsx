import React from "react";
import { Row, Col, List, Icon } from "antd";
import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from "react";
import Link from 'next/link'
import Header from '../components/Header/Header.jsx'
import Para from '../components/Para/Para.jsx';
import Author from '../components/Author/Author.jsx';
import Featured from '../components/Featured/Featured.jsx';
import Footer from '../components/Footer/Footer.jsx';
import serivcePath from '../config/apiUrl.js';
import { Breadcrumb } from "antd";
import  marked  from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'




export default function MyList(list) {
  const [mylist, setMylist] = useState(list.data)
  useEffect(
    () => {
      setMylist(list.data)
    }
  )

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Header />
        <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18}>
            <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a> </Breadcrumb.Item>
                <Breadcrumb.Item>详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              header={<div>最新日志</div>}
              itemLayout='vertical'
              dataSource={mylist}
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 10,
              }}
              renderItem={
                item => (
                  <List.Item>
                    <div className='list-title'>
                      <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span><Icon type="calendar" />{item.addTime}</span>
                      <span><Icon type="folder" />{item.typename}</span>
                      <span><Icon type="fire" />{item.view_count}</span>
                    </div>
                    <div className='list-context'
                      dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                    // dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                    ></div>
                  </List.Item>
                )
              }
            />
          </Col>
          <Col className='comm-right' xs={24} sm={24} md={16} lg={18}>
            <Author />
            <Featured />
            <div></div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}
MyList.getInitialProps = async (context) => {
  const { id } = context.query

  console.log('id:', id);
  const promise = new Promise(
    (resolve) => {
      axios(serivcePath.getListById + id).then(
        (res) => {
          resolve(res.data)
        }
      )
    }
  )
  return await promise
}

