import React, { Component } from 'react'
import { Divider } from 'antd'

export default class Featured extends Component {
    render() {
        return (
            <div className='feature-div comm-box'>
                <span>前置课程</span>
                <Divider></Divider>
                <div><a href="https://react.docschina.org/"  target="_blank"><img src="https://img.sj33.cn/uploads/202010/7-201024142630228.jpg" alt="" width="100%" height='163px' /></a></div>
                <div><a href="https://www.nextjs.cn/docs/getting-started"  target="_blank"><img src="https://www.nextjs.cn/static/images/nextjs-big-logo.png" alt="" width='100%' height='163px' /></a></div>  
                <div><a href="http://nodejs.cn/api/"  target="_blank"><img src="https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png" alt="" width='100%' height='163px' /></a></div>
                <div><a href="https://ant.design/index-cn" target="_blank"><img src="https://pic3.zhimg.com/v2-fd3257bb65fceb34187ae9298fd241d5_xs.jpg?source=172ae18b" alt="" width='100%'  height='163px'/></a></div>
            </div>
        )
    }
}
