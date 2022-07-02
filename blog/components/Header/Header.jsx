import React, { Component } from 'react'
import { useState, } from 'react';
import { useEffect } from 'react';
import { Row, Col, Menu, Icon, SearchOutlined, Button,UserOutlined } from "antd";
import Search from 'antd/lib/input/Search';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import serivcePath from '../../config/apiUrl.js';



const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(serivcePath.getTypeInfo).then(
        (res) => {
          setNavArray(res.data.data)
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()
  }, [])
  // const toIndex =() => {
  //   Router.push('/')
  // }
  const handleClick = (e) => {
    // console.log(e.key)
    if (e.key == 0) {
      Router.push('/')
    }
    else {
      // console.log('e.key:', e.key)
      const ee = e.key.substring(5)
      console.log('ee:', ee)
      Router.push('/list?id=' + ee)
    }
  }
  const handleSearch = (e) => {
    if (e == '') {
      alert('输入不可为空！')

    } else {
      Router.push('/search?id=' + e)
    }
  }

  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        {/* xs={24} sm={24} md={10} lg={10} xl={1200} */}
        <Col>
          <span className='header-logo' ><a href='/'>李垚</a> </span>
          <span className='header-txt'> react个人博客</span>

        </Col>
        {/*  xs={0} sm={0} md={14} lg={8} xl={6} */}

        <Col>
        <Button className='login' icon={<UserOutlined />} href='127.0.0.1:3001'>登录</Button>
          <Search placeholder="input search text" className='search' onSearch={handleSearch} />
          <Menu mode='horizontal' onClick={handleClick}>
            <Menu.Item key='0' className='right-button'>
              <div>

                {/* <Icon type='search'></Icon> */}
              </div>
              <Icon type='home' />
              首页
            </Menu.Item>
            {navArray.map((item) => {
              //console.log('item.key:',item.key)
              return (
                <Menu.Item key={item.key}>
                  <Icon type={item.icon} />
                  {item.typeName}
                </Menu.Item>

              )
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
