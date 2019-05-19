import React, {Component} from 'react';
import {Row, Col, Carousel, List} from 'antd'
import './Index.css'
import StaticList from './StaticList'
import News from './News'
import Footer from './Footer'
import FinacingTool from './FinacingTool'
import FinacingResults from './FinacingResults'
import Show from './Show'
import {statics,loadNews,loadLinks} from "../../services/api";

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            regEntCount:0,
            finEntCount:0,
            finAmountCount:0,
            successFinAmountCount:0,
            finMoneyCount:0,
            successFinMoneyCount:0,
            news:[],
            links:[],
            finacingTools:[],
            finacingMap:[]
        }
    }

    async componentWillMount() {
        let staticResults = await statics();

        let newsResults = await loadNews();

        if(staticResults&&newsResults){
            this.setState({
                regEntCount:staticResults.regEntCount,
                finEntCount:staticResults.finEntCount,
                finAmountCount:staticResults.finAmountCount,
                successFinAmountCount:staticResults.successFinAmountCount,
                finMoneyCount:staticResults.finMoneyCount,
                successFinMoneyCount:staticResults.successFinMoneyCount,
                news:newsResults,
            })
        }
        let linksResults = await loadLinks();

        if(linksResults){
            this.setState({
                links:linksResults,
            })
        }

    }



    render() {
        const {regEntCount,finEntCount,finAmountCount,successFinAmountCount,finMoneyCount,successFinMoneyCount,
        links,finacingTools,finacingMap
        }=this.state
        return (
            <div className={'index'}>
                <div>
                    <Col md={24}>
                        <div className={'index-carousel'}>
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
                        </div>
                    </Col>
                    <Row>
                        <Col span={24}>
                            <StaticList
                                registEnt={regEntCount}
                                nessaryEnt={finEntCount}
                                nessaryNum={finMoneyCount}
                                nessaryMoney={finAmountCount}
                                compeletContanct={successFinAmountCount}
                                compeletFinacing={successFinMoneyCount}
                            ></StaticList>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2}>
                            <News info={this.state.news}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={20} offset={2}>
                            <FinacingTool/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <FinacingResults/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={20} offset={2}>
                            <Show/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Footer
                            links={links}
                            />
                        </Col>
                    </Row>

                </div>

            </div>
        );
    }
}
function onChange(a, b, c) {
    console.log(a, b, c);
}

export default Index;