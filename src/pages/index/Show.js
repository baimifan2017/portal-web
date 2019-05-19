import React, {Component} from 'react';
import {Col, Row} from "antd";
import './Index.css'
class Show extends Component {
    render() {
        return (
            <div className={"show"}>
                <Row>
                    <Col md={24}>
                        <div className={'news-header'}>
                            <h1>合作机构</h1>
                            <div className={'news-header-content'}>
                                中小企业发展需要资金支持，更离不了金融支持。目前绵阳市的众多中小企业、
                                银行机构、财务公司等都参与其中。
                                <br/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} offset={2}>
                        <div>
                            <img src={require('../../comms/imgs/index/caiwu.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/changhong.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongou.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongxin.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/meiling.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/mosu.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/huayi.jpg')} ></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} offset={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/caiwu.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/changhong.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongou.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongxin.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/meiling.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/mosu.jpg')} ></img>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col md={3} offset={5}>
                        <div>
                            <img src={require('../../comms/imgs/index/caiwu.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/changhong.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongou.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongxin.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/meiling.jpg')} ></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} offset={7}>
                        <div>
                            <img src={require('../../comms/imgs/index/caiwu.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/changhong.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongou.jpg')} ></img>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={require('../../comms/imgs/index/hongxin.jpg')} ></img>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Show;