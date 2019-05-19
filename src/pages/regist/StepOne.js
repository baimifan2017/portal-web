import React, {Component,Fragment} from 'react';
import RegistLayout from "../../layouts/registLayOut/RegistLayout.js";
import {stepOneSubmit,verficSocialCode,verficLoginName} from '../../services/api/register'
import '../../comms/baseCss/base.css'
import './regist.css'
import {
    Form, Input, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import Agreement from './Agreement'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


// 企业注册第一步
class StepOneForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        isDisable:false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                delete values.prefix;
                delete values.agreement;
                console.log('Received values of form: ', values);
                stepOneSubmit(values)
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('pwd')) {
            callback('两次密码不一致');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['pwdAgain'], { force: true });
        }
        callback();
    }

    handleEmailChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['@qq.com', '@163.com', '@@163.net', '@gmail.com'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }
    //验证社会信用代码
    verificSocialCode=(rule,value,callback)=>{
        if(value.length == 18){
            let results =verficSocialCode({code:value})

            if(results){
                callback('社会信用代码已经被注册，联系管理员！')
                return;
            }
        }
    }
    //验证社会信用代码
    verificEntName=(rule,value,callback)=>{
        if(value.length > 3){
            let results =verficLoginName({code:value})
            if(results){
                callback('登录名已被注册，请更改！')
                return;
            }
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 0,
                },
            },
        };

        const submitFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 11,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Fragment>
                <RegistLayout registStep={0}>
                    <div></div>
                    <div className={'registerOne'}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item
                            label="社会信用代码"
                        >
                            {getFieldDecorator('socialCode', {
                                rules: [{
                                    required: true, message: '请输入社会信用代码',
                                },{
                                    len: 18,
                                    message: "统一社会信用代码为18位"
                                },{
                                    whitespace: false,
                                    message: "禁止使用空格"
                                },{
                                    validator:this.verificSocialCode
                                }
                                ],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="登录企业名称"
                        >
                            {getFieldDecorator('userName', {
                                rules: [{
                                    required: true, message: '请输入社会信用代码',
                                },{
                                    max: 18,
                                    message: "登录名称不能长度不能超过18位"
                                },{
                                    whitespace: false,
                                    message: "禁止使用空格"
                                },{
                                    pattern: /^[a-zA-Z0-9\-_]*$/,
                                    message: "登录名称只能使用数字、字母及下划线"
                                },{
                                    validator:this.verificEntName
                                }
                                ],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="联系人"
                        >
                            {getFieldDecorator('linkName', {
                                rules: [{
                                    required: true, message: '请输入联系人',
                                },{
                                    max: 18,
                                    message: "名称不能超过18位"
                                },{
                                    whitespace: false,
                                    message: "禁止使用空格"
                                }
                                ],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="联系电话"
                        >
                            {getFieldDecorator('linkPhone', {
                                rules: [{ required: true, message: '联系电话不能为空' },
                                    {
                                        min:5,
                                        message:"请输入电话号码"
                                    },{
                                        max: 11,
                                        message: "移动电话为11位"
                                    }
                                ],
                            })(
                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                        </Form.Item>

                        <Form.Item
                            label="密码"
                        >
                            {getFieldDecorator('pwd', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                },{
                                    min:6,
                                    message:"密码长度不能小于6位"
                                },{
                                    max: 18,
                                    message: "密码长度不能超过28位"
                                },{
                                    whitespace:false,
                                    message:"禁止使用空格"
                                },{
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="确认密码"
                        >
                            {getFieldDecorator('pwdAgain', {
                                rules: [{
                                    required: true, message: '请输入确认密码',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="电子邮箱"
                        >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: '邮箱不能为空' },{
                                        type:"email",
                                        message:"请输入正确邮箱"
                                    }
                                ],
                            })(
                                <AutoComplete
                                    dataSource={websiteOptions}
                                    onChange={this.handleEmailChange}
                                    placeholder="邮箱"
                                >
                                    <Input />
                                </AutoComplete>
                            )}
                        </Form.Item>
                        <Agreement></Agreement>

                        <Form.Item {...tailFormItemLayout}>
                            {getFieldDecorator('agreement',{
                                rules:[
                                { required: true, message: '请阅读' }
                                ],
                                valuePropName: 'checked',
                            })(
                                <Checkbox><span style={{fontWeight:650}}>我已阅读完并同意《用户注册协议》</span></Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item {...submitFormItemLayout} >
                            <Button type="primary" htmlType="submit" disabled={this.state.isDisable}>下一步</Button>
                        </Form.Item>
                    </Form>
                    </div>
                </RegistLayout>
            </Fragment>
        );
    }
}
const StepOne = Form.create({ name: 'register' })(StepOneForm);
export default StepOne;