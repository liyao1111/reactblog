import React, { Component } from 'react'
import { Avatar } from 'antd'
import { Divider } from 'antd'
import { Tooltip } from 'antd'

export default class Author extends Component {
  render() {
    return (
      <div className='author-div comm-box'>
        <div><Avatar src='http://m.imeitou.com/uploads/allimg/220329/5-220329153P9.jpg' /></div>
        <div className="author-instruction">南浦
          <Divider>社交账户</Divider>
          {/* <Avatar size={28} icon='github' className='account'/>
            <Avatar size={28} icon='qq' className='account'/>
            <Avatar size={28} icon='wechat' className='account'/> */}
          <Tooltip title="https://github.com/liyao1111">
            <a href="https://github.com/liyao1111" target="_blank">
              <Avatar size={28} icon="github" className="account" />
            </a>
          </Tooltip>
          <Tooltip title="QQ:1757755064">
            <Avatar size={28} icon="qq" className="account" />
          </Tooltip>
          <Tooltip title="wechat:L1ya0">
            <Avatar size={28} icon="wechat" className="account" />
          </Tooltip>

        </div>

      </div>
    )
  }
}
