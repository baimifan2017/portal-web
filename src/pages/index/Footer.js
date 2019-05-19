import React, {Component} from 'react';
import {Row,Col,List, Typography} from "antd";
const data = [
    'Racing car sprays.',
    'Japanese princess to r.',
    'Australian walks 100km .',
    'Man charged over .',
];
class Footer extends Component {
    render() {
        const linksInfo = this.props.links
        const linkLenght = linksInfo.length
        const linksOne=[];
        const linksTwo=[];
        const linksThr=[];
        const linksFour=[];
        if(linkLenght%4){
            for(let i=0;i<linksInfo.length/4;i++){
                linksOne.push(linksInfo[i])
                linksTwo.push(linksInfo[i+4])
                linksThr.push(linksInfo[i+8])
                linksFour.push(linksInfo[i+10])

            }
        }else {
            for(let i=0;i<linksInfo.length/4;i++){
                linksOne.push(linksInfo[i])
                linksTwo.push(linksInfo[i+4])
                linksThr.push(linksInfo[i+8])
            }
        }
        return (
            <div className={'footer'}>
                <div>
                <Row>
                    <Col md={5} offset={2}>
                        <div className={'footer-aboutUs'}>
                            <h3>关于我们</h3>
                            <p>
                                在市场经济不断发展的今天，最具活力的中小企业已经成为推动我国经济发展和社会进步的重要力量。中小企业发展需要资金支持，更离不了金融支持。
                                基于此，2018年由绵阳市人民银行牵头，更新原“绵阳市中小微企业信用服务网（网上融资对接平台）”，更新后命名“绵荟融通”。
                            </p>
                        </div>
                    </Col>
                    <Col md={1}/>
                    <Col md={16}>
                        <div className={'footer-link'}>
                            <h3>友情链接</h3>
                            <div>
                                <Row>
                                    <Col md={6}>
                                        <List
                                            bordered
                                            dataSource={linksOne}
                                            renderItem={item => (
                                                <List.Item>
                                                    <Typography.Text mark></Typography.Text>
                                                    <a href={item.linkAddress} target={'_blank'}>{item.linkName}</a>
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <List
                                            bordered
                                            dataSource={linksTwo}
                                            renderItem={item => (
                                                <List.Item>
                                                    <Typography.Text mark></Typography.Text>
                                                    <a href={item.linkAddress} target={'_blank'}>{item.linkName}</a>
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <List
                                            bordered
                                            dataSource={linksThr}
                                            renderItem={item => (
                                                <List.Item>
                                                    <Typography.Text mark></Typography.Text>
                                                    <a href={item.linkAddress} target={'_blank'}>{item.linkName}</a>
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <List
                                            bordered
                                            dataSource={linksFour}
                                            renderItem={item => (
                                                <List.Item>
                                                    <Typography.Text mark></Typography.Text>
                                                    <a href={item.linkAddress} target={'_blank'}>{item.linkName}</a>
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                </Row>

                            </div>

                        </div>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }
}

export default Footer;