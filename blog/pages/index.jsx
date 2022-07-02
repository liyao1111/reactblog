import React from "react";
import { Row, Col, List, Icon, Pagination } from "antd";
import Head from 'next/head'
import axios from 'axios'
import { useState } from "react";
import Link from 'next/link'
import marked from 'marked'
import Renderer from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Header from '../components/Header/Header.jsx'
import Para from '../components/Para/Para.jsx';
import Author from '../components/Author/Author.jsx';
import Featured from '../components/Featured/Featured.jsx';
import Footer from '../components/Footer/Footer.jsx';
import serivcePath from '../config/apiUrl.js';




export default function Home(list) {
  const toTop = () => {
    window.scroll(
      {
        top: 0,
        behavior: "smooth"

      }
    )

  }
  const [mylist, setMylist] = useState(list.data)
  const renderer = new marked.Renderer()
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
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Header />

        <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18}>
            <div>
              <List
                grid={{ gutter: 5, column: 1 }}
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
                    //console.log(item.id)

                    <List.Item>
                      <div className='list-title'>
                        <Link href={{ pathname: '/detail/', query: { id: item.id } }}>
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
              {/* <Pagination defaultCurrent={1} total={mylist.length}>

              </Pagination> */}
            </div>

          </Col>
          <Col className='comm-right' xs={24} sm={24} md={16} lg={18}>
            <Author />
            <Featured />
          </Col>
        </Row>
      </div>
      {/* 回到顶部 */}
      {/* blog\public\return_top.webp */}
      <div id="return_top" onClick={toTop}></div>
      {/* <Footer /> */}


    </div >
  )
}
Home.getInitialProps = async () => {
  const promise = new Promise(
    (resolve) => {
      axios(serivcePath.getArticleList).then(
        (res) => {
          resolve(res.data)
        }
      )
    }
  )
  return await promise
}


