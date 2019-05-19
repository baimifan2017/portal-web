import React, {Component,Fragment} from 'react';
import {Button,Steps,Row,Col  } from "antd";
import './RegistLayOut.css'
let Step = Steps.Step;


class RegistLayout extends React.Component {
    render() {
        return (
            <Fragment>
                <header className={'register-header'}>
                    <Row>
                        <Col span={16} offset={4}>
                            <Steps current={this.props.registStep}>
                                <Step title="基本信息" description="填写基本信息" />
                                <Step title="企业信息" description="完善企业信息" />
                                <Step title="其他" description="我的标签、关注" />
                            </Steps>
                        </Col>
                    </Row>
                </header>
                <section className={'register-body'}>
                    <Row>
                        <Col span={16} offset={4}>
                    {
                        React.Children.map(this.props.children, (child, i) => {
                            if(i) return child;
                        })
                    }
                        </Col>
                    </Row>
                </section>
                {/*<footer className={'register-footer'}>*/}
                    {/*/!*<Button type={"primary"} disabled={"false"}>下一步</Button>*!/*/}
                {/*</footer>*/}
            </Fragment>
        );
    }
}

export default RegistLayout;
