import React, {Component,Fragment} from 'react';
import RegistLayout from "../../layouts/registLayOut/RegistLayout.js";
import {stepTwoSubmit,loadTwoInfo} from '../../services/api/register'
import DefSelect from '../../components/DefSelect.js';
import DefUpload from '../../components/DefUpload';
import '../../comms/baseCss/base.css'
import './regist.css'
import {
    Form, Input,  message, Select, Row, Col, Button, AutoComplete,DatePicker
} from 'antd';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;


// 企业注册第二步
class StepTwoForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        isDisable:true,
    };
    async componentWillMount() {
        //行业分类
        let entCategory =await loadTwoInfo({tableName:'dim_ent_category'})
        //企业类型
        let entNature =await loadTwoInfo({ tableName:'dim_ent_nature'})
        if(entCategory&&entNature){

            const categoryOption=[];
            const natureOption=[];
            if(entCategory){
                entCategory.map((item,index)=>{
                    categoryOption.push(
                        <Option value={item.id} key={'c'+index}>{item.name}</Option>
                    )
                })
            }
            if(entNature){
                entNature.map((item,index)=>{
                    natureOption.push(
                        <Option value={item.id} key={'n'+index}>{item.name}</Option>
                    )
                })
            }
            if(categoryOption && natureOption){
                this.setState({
                    entCategory:categoryOption,
                    entNature:natureOption
                })
            }

        }
    }


    handleSubmit = (e) => {
        e.preventDefault();



        this.props.form.validateFieldsAndScroll((err, values) => {

            if (!err) {
                console.log('Received values of form: ', values);



                stepTwoSubmit(values)
            }
        });
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    //日期选择
    onChange=(date, dateString)=> {
        console.log(date, dateString);
    }
    uploadResults=(results)=>{
        this.setState({
            isDisable:results
        })
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
                sm: { span: 12},
            },
        };

        const lineItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 17},
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
        const affterfixSeletor = getFieldDecorator('affterSelect',{
            initialValue:'万元'
        })(
           <Select style={{ width: 70 }}>
                <Option value="0">万元</Option>
            </Select>
        );



        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        const {entCategory,entNature} = this.state;
        return (
            <Fragment>
                <RegistLayout registStep={1}>
                    <div></div>
                    <div className={'registerTwo'}>
                    <Form onSubmit={this.handleSubmit} >
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                    label="企业名称"
                                >
                                    {getFieldDecorator('entName', {
                                        rules: [{
                                            required: true, message: '必填项',
                                        },{
                                            max: 32,
                                            message: "企业名称不能超过32位"
                                        },{
                                            whitespace: false,
                                            message: "禁止使用空格"
                                        }
                                        ],
                                    })(
                                        <Input style={{width:'100%'}}/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                    label="社会信用代码"
                                >
                                    {getFieldDecorator('socialCode', {
                                        rules: [{
                                            required: true, message: '必填项',
                                        }
                                        ],
                                    })(
                                        <Input readOnly={true}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                    label="成立日期"
                                >
                                    {getFieldDecorator('regTime', {
                                        rules: [{
                                            required: true, message: '请选择日期',
                                        }
                                        ],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                    label="员工人数"
                                >
                                    {getFieldDecorator('empNumber')(
                                        <Input  style={{ width: '100%' }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="企业地址"
                                >
                                    {getFieldDecorator('address', {
                                        rules: [{
                                            required: true, message: '必填项',
                                        },{
                                            min: 4,
                                            message: "输入详细地址"
                                        },{
                                            whitespace: false,
                                            message: "禁止使用空格"
                                        }
                                        ],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="法定代表人"
                                >
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: false, message: '必填项' },
                                          {
                                                max: 4,
                                                message: "请输入正确名称"
                                            }
                                        ],
                                    })(
                                        <Input  style={{ width: '100%' }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="所属区域"
                                >
                                    {getFieldDecorator('areaSelect ', {
                                        rules: [{ type: 'string', required: true, message: '必填项' }],
                                    })(
                                       <DefSelect />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="法定代表人联系方式"
                                >
                                    {getFieldDecorator('corPhoneCode', {
                                        rules: [{ required: false, message: '必填项' },
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
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="注册资本"
                                >
                                    {getFieldDecorator('regCapital', {
                                        rules: [{ required: true, message: '必填项' },
                                           {
                                                max: 10,
                                                message: "请确认注册金额"
                                            },{
                                                pattern: /^\d+$|^\d+[.]?\d+$/,
                                                message:"金额只能为数字"
                                            },
                                            {
                                                whitespace: false,
                                                message: "禁止使用空格"
                                            }
                                        ],
                                    })(
                                        <Input addonAfter={affterfixSeletor} style={{ width: '100%' }} />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="联系人姓名"
                                >
                                    {getFieldDecorator('linkName', {
                                        rules: [{ required: false, message: '必填项' },
                                        ],
                                    })(
                                        <Input  style={{ width: '100%' }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="实缴注册资本"
                                >
                                    {getFieldDecorator('paidinCapital', {
                                        rules: [{
                                            required: true, message: '必填项',
                                        },{
                                            max: 10,
                                            message: "名称不能超过18位"
                                        },{
                                            whitespace: false,
                                            message: "禁止使用空格"
                                        }
                                        ],
                                    })(
                                        <Input addonAfter={affterfixSeletor} />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="联系人电话"
                                >
                                    {getFieldDecorator('linkPhone', {
                                        rules: [{
                                            required: false, message: '必填项',
                                        }
                                        ],
                                    })(
                                        <Input  readOnly={true}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="行业分类 "
                                >
                                    {getFieldDecorator('entCategory ', {
                                        rules: [{ required: true, message: '必填项' }
                                        ],
                                    })(
                                        <DefSelect options={entCategory}></DefSelect>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="联系人邮箱"
                                >
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            required: false, message: '',
                                        }
                                        ],
                                    })(
                                        <Input type={'email'}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="登记机关"
                                >
                                    {getFieldDecorator('regAuthority', {
                                        rules: [{
                                            required: false, message: '',
                                        }
                                        ],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="营业期限自"
                                >
                                    {getFieldDecorator('start', {
                                        rules: [{ required: false, message: '' }
                                        ],
                                    })(
                                        <DatePicker onChange={this.onChange} style={{width:'100%'}}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="核准日期"
                                >
                                    {getFieldDecorator('checkDate', {
                                        rules: [{ required: false, message: '' }
                                        ],
                                    })(
                                        <DatePicker onChange={this.onChange} style={{width:'100%'}}/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="营业期限至"
                                >
                                    {getFieldDecorator('end', {
                                        rules: [{ required: true, message: '必填项' }
                                        ],
                                    })(
                                        <DatePicker onChange={this.onChange} style={{width:'100%'}}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="企业类型"
                                >
                                    {getFieldDecorator('end', {
                                        rules: [{ required: true, message: '必填项' }
                                        ],
                                    })(
                                        <DefSelect options={entNature}></DefSelect>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item {...formItemLayout}
                                           label="公司网站"
                                >
                                    {getFieldDecorator('website', {
                                        rules: [{ required: false, message: '' }],
                                    })(
                                        <AutoComplete
                                            dataSource={websiteOptions}
                                            onChange={this.handleWebsiteChange}
                                            placeholder="website"
                                        >
                                            <Input />
                                        </AutoComplete>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} offset={2}>
                                <div style={{display:'block',marginBottom:'15px',marginLeft:'-3px',color: 'rgba(0, 0, 0, 0.85)'}}>
                                    <span style={{color:'red'}}>*</span>
                                    <label>营业执照: </label>
                                <DefUpload
                                    uploadResults = {this.uploadResults.bind(this)}
                                    action={"/smefp-im-web/register/uploadFile?fileType='yyzz'"}></DefUpload>
                                </div>
                            </Col>
                        </Row>


                        <Row>
                            <Col span={20}>
                                <Form.Item {...lineItemLayout}
                                           label="经营范围"
                                >
                                    {getFieldDecorator('scope', {
                                        rules: [{ required: false, message: '' }],
                                    })(
                                        <TextArea placeholder="" autosize={{ minRows: 5, maxRows: 8 }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={20}>
                                <Form.Item {...lineItemLayout}
                                           label="经营范围"
                                >
                                    {getFieldDecorator('scope', {
                                        rules: [{ required: false, message: '' }],
                                    })(
                                        <TextArea placeholder="" autosize={{ minRows: 5, maxRows: 8 }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={20}>
                                <Form.Item {...lineItemLayout}
                                           label="主营范围"
                                >
                                    {getFieldDecorator('primaryBusiness', {
                                        rules: [{ required: false, message: '' }],
                                    })(
                                        <TextArea placeholder="" autosize={{ minRows: 5, maxRows: 8 }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={20}>
                                <Form.Item {...lineItemLayout}
                                           label="企业介绍"
                                >
                                    {getFieldDecorator('comIntroduction', {
                                        rules: [{ required: false, message: '' }],
                                    })(
                                        <TextArea placeholder="" autosize={{ minRows: 5, maxRows: 8 }} />
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
const StepTwo = Form.create({ name: 'register' })(StepTwoForm);
export default StepTwo;