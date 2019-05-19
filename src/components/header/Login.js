import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox,Row,Col } from 'antd';
import topIcon from '../../comms/imgs/logo_1.png'
import './Header.css'
class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 11,
                    offset: 0,
                },
            },
        };
        return (
            <div className={'login'}>
                <div className={'login-contain'}>
                    <Row>
                        <Col span={8} offset={8}>
                            <img src={topIcon} className={'login-header'}></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={8}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请输入用户名' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="用户名"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入登录密码' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="密码"
                                        />,
                                    )}
                                </Form.Item>
                                <a className="login-form-forgot" href="" style={{float:'left'}}>
                                    忘记密码
                                </a>
                                <a href="" style={{float:'right'}}>新用户注册</a>
                                <br/>
                                <Form.Item {...tailFormItemLayout} >
                                    <Button type="primary" htmlType="submit" className="login-form-button" >
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>

                </div>
            </div>

        );
    }
}
const Login = Form.create({ name: 'normal_login' })(LoginForm);
export default Login;