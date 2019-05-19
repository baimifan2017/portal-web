import React, {Component} from 'react';
import map from '../../comms/imgs/index/bigMap.png'
import {Button, Col, Row} from "antd";
import {loadFinacingMap} from "../../services/api";
class FinacingResults extends Component {
    constructor(props){
        super(props)
        this.state={
            finacingMap:[
                {areaName: "北川羌族自治县",
                finAmountCount: 0,
                finEntCount: 0,
                finMoneyCount: 0,
                regEntCount: 1905,
                showCount: 0,
                successFinAmountCount: 0,
                successFinMoneyCount: 0
                },
                {areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                },
                {areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                },
                {areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                },
                {areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                },{areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                },{areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                },{areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                },{areaName: "北川羌族自治县",
                    finAmountCount: 0,
                    finEntCount: 0,
                    finMoneyCount: 0,
                    regEntCount: 1905,
                    showCount: 0,
                    successFinAmountCount: 0,
                    successFinMoneyCount: 0
                }
                ]
        }
    }
    async componentDidMount() {
        let finacingMap1 =await loadFinacingMap()
        if(finacingMap1){
            this.setState({
                finacingMap:finacingMap1
            })
        }

    }

    render() {
        const info = this.state.finacingMap
        console.log(info)
        return (
            <div className={'finacingResults'}>

                <div className={'finacingResults-body'}>
                    <Row>
                        <Col md={12} sm={24} offset={2}>
                            <div style={{position:'absolute'}}>
                            <img src={map}></img>
                            <span className={'beichuan'}>
                                <div>
                                    {info[5].regEntCount} <span>家</span>
                                </div>
                                <div>
                                    {info[5].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            <span className={'anzhou'}>
                                <div>
                                    {info[6].regEntCount} <span>家</span>
                                </div>
                                <div>
                                    {info[6].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            <span className={'fucheng'}>
                                <div>
                                    {info[4].regEntCount} <span>家</span>
                                </div>
                                <div>
                                    {info[4].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            <span className={'santai'}>
                                <div>
                                    12<span>家</span>
                                </div>
                                <div>
                                    12<span>万元</span>
                                </div>
                            </span>
                            <span className={'pingwu'}>
                                <div>
                                      {info[3].regEntCount} <span>家</span>
                                </div>
                                <div>
                                    {info[3].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            <span className={'jiangyou'}>
                                <div>
                                      {info[1].regEntCount}<span>家</span>
                                </div>
                                <div>
                                    {info[1].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            <span className={'zitong'}>
                              <div>
                                    {info[2].regEntCount} <span>家</span>
                                </div>
                                <div>
                                    {info[2].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            <span className={'youxian'}>
                                <div>
                                    {info[7].regEntCount} <span>家</span>
                                </div>
                                <div>
                                    {info[7].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            <span className={'yanting'}>
                              <div>
                                    {info[8].regEntCount} <span>家</span>
                                </div>
                                <div>
                                    {info[8].finMoneyCount}<span>万元</span>
                                </div>
                            </span>
                            </div>
                        </Col>
                        <Col md={8} sm={24}>
                            <h1 style={{color:'#fff'}}>融资成果</h1>
                            <p>绵阳区域内，按照融资需求，注册企业，融资金额，以及企业性质（新型农村经营体、涉农企业、
                                军明融合企业、高新技术企业、科技型企业）分项统计</p>
                            <p>针对中小企业不同发展阶段的融资需求和融资条件，以政府资金为引导，发挥科技综合服务优势，
                                整合银行、担保、保险、创投等资源，通过集合中小企业和集成创新金融产品，为我市中小企业
                                提供一站式、个性化的公益性的融资服务。</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} offset={17}>
                            <Button>成果详情</Button>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default FinacingResults;