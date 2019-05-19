import React, {Component} from 'react';
import {Col, Row,Card,} from "antd";
import {loadFinacingTools} from "../../services/api";
const { Meta } = Card;
class FinacingTool extends Component {
    constructor(props){
        super(props)
        this.state={
            finacingTools:[
                {logoName:'jianhang.png', amountName: "200万及以下", bankName: "中国建设银行股份有限公司绵阳分行",
                    guaranteeName: "信用",
                    id: "E155BE04-E3D2-11E8-8E27-0242C0A8450F",
                    proName: "云税贷",
                    termName: "12个月及以下",
                    website: "www.ccb.com"},
                {logoName:'jianhang.png', amountName: "200万及以下", bankName: "中国建设银行股份有限公司绵阳分行",
                    guaranteeName: "信用",
                    id: "E155BE04-E3D2-11E8-8E27-0242C0A8450F",
                    proName: "云税贷",
                    termName: "12个月及以下",
                    website: "www.ccb.com"},
                {logoName:'jianhang.png', amountName: "200万及以下", bankName: "中国建设银行股份有限公司绵阳分行",
                    guaranteeName: "信用",
                    id: "E155BE04-E3D2-11E8-8E27-0242C0A8450F",
                    proName: "云税贷",
                    termName: "12个月及以下",
                    website: "www.ccb.com"},
                {logoName:'jianhang.png', amountName: "200万及以下", bankName: "中国建设银行股份有限公司绵阳分行",
                    guaranteeName: "信用",
                    id: "E155BE04-E3D2-11E8-8E27-0242C0A8450F",
                    proName: "云税贷",
                    termName: "12个月及以下",
                    website: "www.ccb.com"},
                {logoName:'jianhang.png', amountName: "200万及以下", bankName: "中国建设银行股份有限公司绵阳分行",
                    guaranteeName: "信用",
                    id: "E155BE04-E3D2-11E8-8E27-0242C0A8450F",
                    proName: "云税贷",
                    termName: "12个月及以下",
                    website: "www.ccb.com"},
                {logoName:'jianhang.png', amountName: "200万及以下", bankName: "中国建设银行股份有限公司绵阳分行",
                    guaranteeName: "信用",
                    id: "E155BE04-E3D2-11E8-8E27-0242C0A8450F",
                    proName: "云税贷",
                    termName: "12个月及以下",
                    website: "www.ccb.com"},
            ]
        }
    }

    async componentWillMount() {
        let finacingTools = await loadFinacingTools();
        if(finacingTools){
            this.setState({
                finacingTools
            })
        }
    }

    render() {
        let finacingTools = this.state.finacingTools
        return (
            <div className={'finacingTools'}>
                <Row>
                    <Col md={24}>
                        <div className={'news-header'}>
                            <h1>融资工具</h1>
                            <div className={'news-header-content'}>
                                绵荟融通下融资工具模块为银行及金融机构发布的融资产品，用户可在门户端查阅融资工具详情，
                                <br/>
                                也可通过注册用户登录融资平台，针对意向融资工具一键融资
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className={'finacingTools-one'}>
                    <Col md={5} sm={8} xs={12} offset={2}>
                        <Card
                            hoverable
                            style={{ width: 220,maxHeight:'350px' }}
                            cover={<img alt="example" src={require(`../../comms/imgs/index/${finacingTools[0].logoName}`)} />}
                        >
                            <Meta title={finacingTools[0].bankName} />
                            <Meta title={finacingTools[0].proName} description={`融资期限 : ${finacingTools[0].termName}`} />
                            <Meta description={`担保方式 : ${finacingTools[0].guaranteeName}`} />
                            <br/>
                            <a>详情</a>
                        </Card>
                    </Col>
                    <Col md={5} sm={8} xs={12}>
                        <Card
                            hoverable
                            style={{ width: 220,maxHeight:'350px' }}
                            cover={<img alt="example" src={require(`../../comms/imgs/index/${finacingTools[1].logoName}`)} />}
                        >
                            <Meta title={finacingTools[1].bankName} />
                            <Meta title={finacingTools[1].proName} description={`融资期限 : ${finacingTools[1].termName}`} />
                            <Meta description={`担保方式 : ${finacingTools[1].guaranteeName}`} />
                            <br/>
                            <a>详情</a>
                        </Card>
                    </Col>
                    <Col md={5} sm={8} xs={12}>
                        <Card
                            hoverable
                            style={{ width: 220,maxHeight:'350px' }}
                            cover={<img alt="example" src={require(`../../comms/imgs/index/${finacingTools[2].logoName}`)} />}
                        >
                            <Meta title={finacingTools[2].bankName} />
                            <Meta title={finacingTools[2].proName} description={`融资期限 : ${finacingTools[2].termName}`} />
                            <Meta description={`担保方式 : ${finacingTools[2].guaranteeName}`} />
                            <br/>
                            <a>详情</a>
                        </Card>
                    </Col>
                    <Col md={5} sm={8} xs={12}>
                        <Card
                            hoverable
                            style={{ width: 220,maxHeight:'350px' }}
                            cover={<img alt="example" src={require(`../../comms/imgs/index/${finacingTools[3].logoName}`)} />}
                        >
                            <Meta title={finacingTools[3].bankName} />
                            <Meta title={finacingTools[3].proName} description={`融资期限 : ${finacingTools[3].termName}`} />
                            <Meta description={`担保方式 : ${finacingTools[3].guaranteeName}`} />
                            <br/>
                            <a>详情</a>
                        </Card>
                    </Col>
                    </div>
                </Row>
                <Row>
                    <div className={'finacingTools-two'}>
                        <Col md={5} sm={8} xs={12} offset={7}>
                            <Card
                                hoverable
                                style={{ width: 220,maxHeight:'350px' }}
                                cover={<img alt="example" src={require(`../../comms/imgs/index/${finacingTools[4].logoName}`)} />}
                            >
                                <Meta title={finacingTools[4].bankName} />
                                <Meta title={finacingTools[4].proName} description={`融资期限 : ${finacingTools[4].termName}`} />
                                <Meta description={`担保方式 : ${finacingTools[4].guaranteeName}`} />
                                <br/>
                                <a>详情</a>
                            </Card>
                        </Col>
                        <Col md={5} sm={8} xs={12} >
                            <Card
                                hoverable
                                style={{ width: 220,maxHeight:'350px' }}
                                cover={<img alt="example" src={require(`../../comms/imgs/index/${finacingTools[5].logoName}`)} />}
                            >
                                <Meta title={finacingTools[5].bankName} />
                                <Meta title={finacingTools[5].proName} description={`融资期限 : ${finacingTools[5].termName}`} />
                                <Meta description={`担保方式 : ${finacingTools[5].guaranteeName}`} />
                                <br/>
                                <a>详情</a>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

export default FinacingTool;