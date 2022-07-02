import React from 'react';
import { useState } from 'react';
import { List } from 'antd';
import { Icon } from 'antd';
import axios from 'axios'

const Para = (list) => {

    const [mylist, setMylist] = useState(list.data)
    return (
        <div>
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
                            <div className='list-title'>{item.title}</div>
                            <div className="list-icon">
                                <span><Icon type="calendar" />{item.addTime}</span>
                                <span><Icon type="folder" />{item.typename}</span>
                                <span><Icon type="fire" />{item.view_count}</span>
                            </div>
                            {/* <div className='list-context'>{item.introduce}</div> */}
                            <div className='list-context' dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}></div>

                        </List.Item>
                    )
                }
            />
        </div>
    );
}

export default Para;
Para.getInitialProps = async () => {
    const promise = new Promise(
        (resolve) => {
            axios('http://127.0.0.1:7001/default/getArticleList').then(
                (res) => {
                    resolve(res.data)
                }
            )
        }
    )
    return await promise
}
