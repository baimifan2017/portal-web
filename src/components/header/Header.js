import React, {Component} from 'react';
import {Row,Col,} from 'antd'
import {Link} from 'react-router-dom'
import {getModuleId} from "../../services/api";

import MenuNav from './MenuNav'
import './Header.css'
import headerLogo from '../../comms/imgs/logo.png'

class Header extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount() {
        let results = await getModuleId();
        if (results){
            localStorage.setItem('index',results[0].id?results.id:'BF925902-7AC7-11E8-8A0B-784F437A721F');
            localStorage.setItem('gov',results[1].id?results.id:'DFDFD933-7AC7-11E8-8A0B-784F437A721F')
            localStorage.setItem('finacing',results[2].id)
            localStorage.setItem('entInfo',results[3].id)
        }
    }

    render() {
        return (
            <div className={'header'}>
                <Row>
                    <Col md={16} offset={2} >
                        <div className={'header-logo'}>
                            <img src={headerLogo} ></img>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className={'header-right'}>
                            <Link to={'/login'}>用户登录</Link>
                            <Link to={'/stepeOne'}>用户注册</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={24} sm={24} xs={24}>
                        {/*<MenuNav></MenuNav>*/}
                        <div className='nav'>
                            <Row>
                                <Col md={20} offset={2} sm={20} xs={20}>
                                    <div className='button-group'>
                                        <Link to={'/index/indexV'}>
                                            <div className='button button-3d button-primary button-rounded' >首页</div>
                                        </Link>


                                        <Link to={'/index/gov'}>
                                            <div className='button button-3d button-primary button-rounded' >政府服务</div>
                                        </Link>

                                        <div className='button button-3d button-primary button-rounded' >json[i].name </div>
                                        <div className='button button-3d button-primary button-rounded' >json[i].name </div>
                                        <div className='button button-3d button-primary button-rounded' >json[i].name </div>
                                        <div className='button button-3d button-primary button-rounded' >json[i].name </div>
                                        <div className='button button-3d button-primary button-rounded' >json[i].name </div>
                                        <div className='button button-3d button-primary button-rounded' >json[i].name </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Header;