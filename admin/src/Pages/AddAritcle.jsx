import React from 'react';
import { useState, useEffect } from 'react';
import marked from 'marked'
import '../static/CSS/AddArticle.css'
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd'
import axios from 'axios';
import servicePath from '../config/apiUrl';
const { Option } = Select
const { TextArea } = Input
const AddAritcle = (props) => {
    const [articleId, setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState('')   //文章标题
    const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd, setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState() //简介的html内容
    const [showDate, setShowDate] = useState()   //发布日期
    const [updateDate, setUpdateDate] = useState() //修改日志的日期
    const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType, setSelectType] = useState('请选择文章类别') //选择的文章类别
    const[author,setAuthor] = useState('admin')

    useEffect(() => {
        getTypeInfo();
        // 获取文章id
        const tmpId = props.match.params.id
        if (tmpId) {
            setArticleId(tmpId)
            getArticleById(tmpId)
        }
    }, []);
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });
    //  文章内容渲染到预览框
    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }
    // 文章简介渲染到预览框
    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value)
        let html = marked(e.target.value)
        setIntroducehtml(html)
    }
    // 获取文章类别
    const getTypeInfo = () => {
        axios(
            {
                method: 'get',
                url: servicePath.getTypeInfo,
                withCredentials: true,
            }
        ).then(
            (res) => {
                // console.log('res_data',res.data.data)

                setTypeInfo(res.data.data);
                // if(res.data.data === '未登陆'){
                //     localStorage.removeItem('openId')
                //     props.history.push('/') 
                // }else{
                //      console.log('resdata',res.data.data)
                //     setTypeInfo(res.data.data);
                // } 
            }
        )
    }
    // 把文章类别传到state
    const selectTypeHandle = (value) => {
        setSelectType(value)
    }
    // 保存文章
    const saveArticle = () => {
        //console.log(selectedType)
        if (!selectedType) {
            message.error('必须选择文章类型')

            return false
        }
        if (!articleTitle) {
            message.error('标题不可为空')
            return false
        }
        if (!articleContent) {
            message.error('文章内容不可为空')
            return false
        }
        if (!introducemd) {
            message.error('简介不可为空')
            return false
        }
        if (!showDate) {
            message.error('发布日期不可为空')
            return false
        }
        let dataProps = {
            id: null,
            type_id: null,
            title: null,
            article_content: null,
            introduce: null,
            addTime: null,
            view_count: 0,
            auth_id:null,
        }
        dataProps.type_id = Number(selectedType) + 1; //类型id
        console.log('typeid:', dataProps.type_id)
        dataProps.title = articleTitle;               //文章标题 
        dataProps.article_content = articleContent;   //文章内容
        dataProps.introduce = introducehtml;           //简介
        const dateText = showDate.replace('-', '/')
        dataProps.addTime = dateText;
        dataProps.auth_id =author;
        // dataProps.addTime = new Date(dateText).getDate()
        // const dateText = showDate.replace('-', '/')
        // dataProps.addTime = new Date(dateText).getTime() / 1000
        console.log('date', dataProps.addTime)
        if (articleId === 0) {
            dataProps.view_count = 0;
            axios(
                {
                    method: 'post',
                    url: servicePath.addArticle,
                    data: dataProps,
                    withCredentials: true
                }).then(
                    (res) => {
                        // console.log(res.data.article)
                        setArticleId(res.data.insertId) // 记录发布状态
                        if (res.data.isSuccess) {
                            message.success('发布成功')
                            // console.log('time:', res.data.AddAritcle)
                            // console.log('result:', res.data)
                            // console.log('insertid:', res.data.insertId)
                            // console.log('issuccess:', res.data.isSuccess)
                            // setTimeout(() => {
                            //     window.location.reload()
                            // }, 500);
                        } else {
                            console.log('result:', res.data.res)
                            console.log('insertid:', res.data.insertId)
                            console.log('issuccess:', res.data.isSuccess)
                            message.error('文章发布失败')
                        }
                    }
                )

        } else {
            dataProps.id = articleId;
            axios({
                method: 'post',
                url: servicePath.updateArticle,
                data: dataProps,
                withCredentials: true
            }).then(
                (res) => {
                    if (res.data.isSuccess) {
                        console.log('data:',res)
                        message.success('文章更新成功')
                    } else {
                        message.error('文章保存失败')
                    }
                }
            )
        }


    }
    // 修改文章时让内容显示出来
    const getArticleById = (id) => {
        axios(servicePath.getArticleById + id, {
            withCredentials: true
        }).then(
            (res) => {
                console.log('resdata:', res.data.data);
                const articleInfo = res.data.data[0];
                setArticleTitle(articleInfo.title)
                setArticleContent(articleInfo.article_content)
                const html = marked(articleInfo.article_content)
                setMarkdownContent(html)
                // setIntroducemd(articleInfo.introduce)
                // const tpmInt = marked(articleInfo.introduce)
                // setIntroducehtml(tpmInt)
                setShowDate(articleInfo.addTime)
                setSelectType(articleInfo.typeId)
            }
        )
    }
    return (
        <div key={props.location.key}>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input
                                value={articleTitle}
                                placeholder='博客标题'
                                size='large'
                                onChange={(e) => { setArticleTitle(e.target.value) }}
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue={selectedType}
                                size='large'

                                onChange={selectTypeHandle}
                            >
                                {
                                    typeInfo && typeInfo.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.Id}>{item.type}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea className='markdown-content'
                                rows={35}
                                placeholder='文章内容'
                                value={articleContent}
                                onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className='show-html'
                                dangerouslySetInnerHTML={{ __html: markdownContent }}
                            >

                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span='24'>
                            <Button size='large' >暂存文章</Button>
                            &nbsp;
                            <Button size='large' type='primary' onClick={saveArticle}>发布文章</Button>
                        </Col>
                        <Col span='24'>
                            <br />
                            <TextArea
                                rows={4}
                                placeholder='文章简介'
                                value={introducehtml}
                                onChange={changeIntroduce}
                            >
                            </TextArea>
                            <br />
                            <br />
                            <div className='introduce-html'
                                dangerouslySetInnerHTML={{ __html: introducehtml }}
                            ></div>
                        </Col>
                        <Col span='12'>
                            <div className='date-select'>
                                <DatePicker
                                    placeholder='发布日期'
                                    size='large'
                                    onChange={(date, dateString) => { setShowDate(dateString) }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default AddAritcle;
