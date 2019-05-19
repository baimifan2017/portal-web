import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Layout, Row, Col, PageHeader} from 'antd'
import {currentButtonInfo} from '../redux/reducer'
import {store} from '../redux/store'
import {getNavTab} from '../services/api/common'
import './basicLayOut.css'
const {
    Header, Footer, Sider, Content,
} = Layout;


let haveTriger = false;
const routes = [
    {
        path: 'index',
        breadcrumbName: '政府服务',
    },
    {
        path: 'first',
        breadcrumbName: '人民银行',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu1111',
    },
];
class BasicLayOut extends Component {
    constructor(props){
        super(props)
        this.state={
            releaseNessary:[
                {name:'发布融资需求',path:'',isSelect:true},
                {name:'在线洽谈',path:'',isSelect:false},
                {name:'我的融资',path:'',isSelect:false},
                {name:'融资工具',path:'',isSelect:false},
            ]
        }
    }

    async handleTrigerOne(releaseNessary){
        if(releaseNessary && haveTriger==false){
            const {url,moudleId} = this.props
            let results = await getNavTab(url,releaseNessary[0].id,moudleId);
            store.dispatch(currentButtonInfo(results))
            haveTriger=true
        }
    }
    componentWillUnmount() {
        haveTriger=false
    }

    render() {
        const releaseNessary = this.props.navButton;
        const {url,moudleId} = this.props
        this.handleTrigerOne(releaseNessary)
        return (
            <Layout className={'basicLayOut'}>
                <Header className={'basicLayOut-header'}>
                    <p>{this.props.title}</p>
                </Header>
                <Row>
                    <Col md={20} offset={2}>
                        <div>
                            <PageHeader title="Title" breadcrumb={{ routes }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}/>
                    <Col md={20}>
                        <Layout className={'basicLayOut-content'}>

                            <Sider className={'basicLayOut-content-left'}>
                                <div>
                                    {
                                        releaseNessary?releaseNessary.map((item,index)=>{
                                            return <Button type={item.isSelect?"primary":null} block
                                                           onClick={async ()=>
                                                           {
                                                               for(let i=0;i<releaseNessary.length;i++){
                                                                   releaseNessary[i].isSelect=false;
                                                               }
                                                               releaseNessary[index].isSelect=true;
                                                               this.setState({
                                                                   releaseNessary:releaseNessary,
                                                               })
                                                               let results = await getNavTab(url,item.id,moudleId);
                                                               results.push({setId:item.id});
                                                               store.dispatch(currentButtonInfo(results))
                                                           }
                                                           }
                                            >{item.name}</Button>
                                        }):null
                                    }
                                </div>
                                <p>
                                    账户管理
                                </p>
                                <div>
                                    <Button type="" block>发布融资需求</Button>
                                    <Button block>已关注信息</Button>
                                    <Button block>企业信息</Button>
                                    <Button block>企业变更</Button>
                                    <Button block>修改密码</Button>
                                </div>
                            </Sider>

                            <Content className={'basicLayOut-content-right'}>
                                {
                                    React.Children.map(this.props.children,(child ,i)=>{
                                        if(i < 0) return;
                                        return child
                                    })
                                }

                            </Content>
                        </Layout>
                    </Col>
                </Row>
                <Footer  className={'basicLayOut-footer'}>Footer</Footer>
            </Layout>
        );
    }
}
export default BasicLayOut;