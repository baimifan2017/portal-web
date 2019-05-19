import React, {Component,Fragment} from 'react';
import RegistLayout from "../../layouts/registLayOut/RegistLayout.js";
import DefCheckbox from '../../components/DefCheckbox';
import DefRadio from '../../components/DefRadio';
import {loadThirInfo,stepThirSubmit} from '../../services/api/register'
import '../../comms/baseCss/base.css'
import './regist.css'

import '../../comms/baseCss/base.css'
import './regist.css'
import {
    Form, Row, Col, Button,
} from 'antd';



// 企业注册第三步
class StepThirForm extends Component {
    state = {
        isDisable:false,
    };

    async componentWillMount() {
        //获取企业标签
        let entLable = await loadThirInfo({tableName:'dim_ent_label'});
        //获取关注类容
        let entFllow = await loadThirInfo({tableName:'dim_ent_follow'});
        let newEntLabel=[];
        let newEntFllow=[];
        entLable.map((item,index)=>{
            newEntLabel.push({label:item.name, value:item.id})
        })
        entFllow.map((item,index)=>{
            newEntFllow.push({label:item.name, value:item.id})
        })
       if(newEntFllow&&newEntLabel){
           this.setState({
               entLabel:newEntLabel,
               entFllow:newEntFllow
           })
       }else {
           alert("加载未完成")
       }
    }



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.id='13'
                console.log('Received values of form: ', values);
                stepThirSubmit(values)
            }
        });
    }


    render() {
        const {entLabel,entFllow}=this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
                md: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 15 },
            },
        };
        const tailFormItemLayout = {
            labelCol: {
                xs: { span: 7 },
                sm: { span: 6 },
                md: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 8 },
                md: { span: 6 },
                lg: { span: 4 },
            }
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

        const { getFieldDecorator } = this.props.form;


        return (
            <Fragment>
                <RegistLayout registStep={2}>
                    <div></div>
                    <div className={'registerThir'}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Row>
                            <Col span={{xs:24, sm: 24, md: 20}} >
                                <Form.Item
                                    label="企业规模"
                                >
                                    {getFieldDecorator('entScale', {
                                        rules: [{
                                            required: false, message: '',
                                        }
                                        ],
                                    })(
                                        <DefRadio />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={{xs:24, sm: 24, md: 24}}>
                                <Form.Item {...tailFormItemLayout}
                                    label="企业标签"
                                >
                                    {getFieldDecorator('entLabel', {
                                        rules: [{
                                            required: false, message: '',
                                        },
                                        ],
                                    })(
                                        <DefCheckbox options={entLabel}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={{xs:24, sm: 24, md: 20}} >
                                <Form.Item {...tailFormItemLayout}
                                           label="我的关注"
                                >
                                    {getFieldDecorator('entFellow', {
                                        rules: [{
                                            required: false, message: '',
                                        },
                                        ],
                                    })(
                                        <DefCheckbox options={entFllow}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
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
const StepThir = Form.create({ name: 'register' })(StepThirForm);
export default StepThir;