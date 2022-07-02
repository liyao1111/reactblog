import React from 'react'
import { useState } from 'react';
import { Row, Col, List, Icon } from "antd";
import { Breadcrumb } from 'antd';
import Head from 'next/head'
import Header from '../components/Header/Header.jsx'
import Para from '../components/Para/Para.jsx';
import Author from '../components/Author/Author.jsx';
import Featured from '../components/Featured/Featured.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { marked } from 'marked';





export default function MyList() {

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
            <Para />
          </Col>
          <Col className='comm-right' xs={24} sm={24} md={16} lg={18}>
            <Author />
            <Featured />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}
