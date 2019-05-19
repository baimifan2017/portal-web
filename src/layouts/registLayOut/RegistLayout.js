import React, {Component,Fragment} from 'react';
import {Button,Steps } from "antd";
import './RegistLayOut.css'
let Step = Steps.Step;
class RegistLayout extends React.Component {
    render() {
        return (
            <Fragment>
                <header className={'register-header'}>
                    <Steps current={this.props.currentStep}>
                        <Step title="基本信息" description="填写基本信息" />
                        <Step title="企业信息" description="完善企业信息" />
                        <Step title="其他" description="我的标签、关注" />
                    </Steps>,
                </header>
                <section className={'register-body'}>
                    {
                        React.Children.map(this.props.children, (child, i) => {
                            if(i) return child;
                        })
                    }
                </section>
                <footer className={'register-footer'}>
                    <Button type={"primary"} disabled={"false"}>下一步</Button>
                </footer>
            </Fragment>
        );
    }
}

export default RegistLayout;
