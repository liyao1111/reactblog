import React from 'react'
import { useState } from 'react'
import 'antd/dist/antd.css'
import { Card, Input, Button, Spin, message } from 'antd'
import { UserOutlined, LockOutlined, Icon, } from '@ant-design/icons'
import { useHistory } from "react-router-dom";


import '../static/CSS/Login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

export default function Login(props) {
    const history = useHistory()


    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState('')
    // 登陆检查模块
    const checkLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (!userName) {
            message.error('用户名不可为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        } else if (!password) {
            message.error('密码不可为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
            return false
        }
        let dataProps = {
            'userName': userName,
            'password': password
        }
        console.log(1, userName, password)
        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true,
        }).then(res => {
            setIsLoading(false)
            if (res.data.data === '登录成功') {
                localStorage.setItem('openId', res.data.openId)
                // history.push('/index/')
                window.location.replace('/index/')              
            // props.history.push('/index')
                // props.history.push('/index')
                // window.location.reload()
            } else {
                message.error('用户名密码错误')
            }
        })
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="My React_blog System" bordered={true} style={{ width: 400 }}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,0.25)' }} />}
                        onChange={e => {
                            setUserName(e.target.value)
                            // console.log(e.target.value)
                        }}
                    />
                    <br />
                    <br />
                    <Input.Password
                        id="passWord"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,0.25)' }} />}
                        onChange={e => {
                            setPassword(e.target.value)
                            // console.log(e.target.value)
                        }}
                    />
                    <br />
                    <br />
                    <Button type='primary' size='large' block onClick={checkLogin}>Login</Button>
                </Card>
            </Spin>
        </div>
    )
}
