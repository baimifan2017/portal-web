import React, {Component} from 'react';
import {Carousel,Row,Col, List, Avatar, Button, Skeleton } from "antd";
import reqwest from 'reqwest';
import './Index.css'
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
class News extends Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                console.log(res)
                callback(res);
            },
        });
    };


    render() {
        const { initLoading, loading, list } = this.state;
        const {info}=this.props
        // console.log(info)
        return (
            <div className={'news'}>
                <Row>
                    <Col md={24}>
                        <div className={'news-header'}>
                            <h1>最新资讯</h1>
                            <div className={'news-header-content'}>
                                绵阳市中小企业信用融资服务网由人民银行牵头建立，网站将会不定期发布绵阳境内金融动态、融资福利、
                            <br/>
                                办事指南等新闻，努力为
                                中小企业做好融资服务。
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={9} sm={24} xs={24}>
                        <div className={'news-left'}>
                        <Carousel afterChange={onChange} autoplay={true}>
                            <div className={'carsouel-item'}>
                                <h3>1</h3>
                            </div>
                            <div className={'carsouel-item'}>
                                <h3>2</h3>
                            </div>
                            <div className={'carsouel-item'}>
                                <h3>3</h3>
                            </div>
                            <div className={'carsouel-item'}>
                                <h3>4</h3>
                            </div>
                        </Carousel>
                    </div></Col>
                    <Col md={15} sm={24} xs={24}>
                        <div className={'news-right'}>
                            <List
                                className="demo-loadmore-list"
                                loading={initLoading}
                                itemLayout="horizontal"
                                dataSource={info}
                                renderItem={item => (
                                    <List.Item actions={[<a>----</a>, <a>详情</a>]}>
                                        <Skeleton avatar title={false} loading={item.loading} active>
                                            <List.Item.Meta
                                                title={<a href="https://ant.design"></a>}
                                                description={item.title}
                                            />
                                        </Skeleton>
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col md={2} offset={11}>
                        <Button style={{margin:'30px 0px'}}>更多新聞</Button>
                    </Col>
                </Row>

            </div>
        );
    }
}
function onChange(a, b, c) {
    console.log(a, b, c);
}
export default News;