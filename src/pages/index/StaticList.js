import React, {Component} from 'react';
import { Row,Col} from 'antd';
import zhce from '../../comms/imgs/index/zhuceqiye.png'
import xuquqiy from '../../comms/imgs/index/xuqiuqiye.png'
import xiuqu from '../../comms/imgs/index/xuqiujine.png'
import rongzixuqiu from '../../comms/imgs/index/rongzixuqiu.png'
import wanchengrongzi from '../../comms/imgs/index/wanchengrongzi.png'
import wanchengjine from '../../comms/imgs/index/wanchengjine.png'

const listData = [];


class StaticList extends Component {
    render() {
        const {registEnt,nessaryEnt,nessaryNum,nessaryMoney,compeletContanct,compeletFinacing} = this.props
        return (
            <div>
                <Row className={'list'}>
                    <Col md={20} offset={2} sm={24} xs={0}>
                        <ul className={'staticList'}>
                            <Row>
                                <Col span={4}>
                                    <li style={{borderRight: '1px solid #e9e7e7'}}>
                                        <div className={'staticList-item'}>
                                            <img src={zhce}></img>
                                            <div>
                                                <ul>
                                                    <li>注册企业</li>
                                                    <li>{registEnt}<span>家</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </Col>
                                <Col md={4}>
                                    <li style={{borderRight: '1px solid #e9e7e7'}}>
                                        <div className={'staticList-item'}>
                                            <img src={xuquqiy}></img>
                                            <div>
                                                <ul>
                                                    <li>发布需求企业</li>
                                                    <li>{nessaryEnt}<span>家</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </Col>
                                <Col span={4}>
                                    <li style={{borderRight: '1px solid #e9e7e7'}}>
                                        <div className={'staticList-item'}>
                                            <img src={rongzixuqiu}></img>
                                            <div>
                                                <ul>
                                                    <li>融资需求</li>
                                                    <li>{nessaryNum}<span>项</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </Col>
                                <Col span={4}>
                                    <li style={{borderRight: '1px solid #e9e7e7'}}>
                                        <div className={'staticList-item'}>
                                            <img src={wanchengrongzi}></img>
                                            <div>
                                                <ul>
                                                    <li>完成融资对接</li>
                                                    <li>{compeletContanct}<span>项</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </Col>
                                <Col span={4}>
                                    <li style={{borderRight: '1px solid #e9e7e7'}}>
                                        <div className={'staticList-item'}>
                                            <img src={xiuqu}></img>
                                            <div>
                                                <ul>
                                                    <li>需求金额</li>
                                                    <li>{nessaryMoney}<span>万元</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </Col>
                                <Col span={4}>
                                    <li style={{borderRight: '1px solid #e9e7e7'}}>
                                        <div className={'staticList-item'}>
                                            <img src={wanchengjine}></img>
                                            <div>
                                                <ul>
                                                    <li>完成融资资金</li>
                                                    <li>{compeletFinacing}<span>万元</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </Col>
                            </Row>

                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StaticList;