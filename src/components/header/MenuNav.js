import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import './Header.css'
import {Link} from 'react-router-dom'
class MenuNav extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div className={'menuNav'}>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                    <Menu.Item key="index">
                        <Icon type="mail" />
                        首页
                    </Menu.Item>
                    <Menu.Item key="gov" >
                        <Link to={''}>
                            政府服务
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="app" >
                        <Link to={''}>
                            <Icon type="finacing" />
                            金融机构
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="entInfo" >
                        <Link to={''}>
                            <Icon type="appstore" />
                            企业信息
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="finacingTool" >
                        <Link to={''}>
                            <Icon type="appstore" />
                            融资工具
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="innovation" >
                        <Link to={''}>
                            <Icon type="appstore" />
                            金融创新
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="dynamic" >
                        <Link to={''}>
                            <Icon type="appstore" />
                            金融动态
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="credit" >
                        <Link to={''}>
                            <Icon type="appstore" />
                            信用建设
                        </Link>
                    </Menu.Item>
                    {/*<Menu.Item key="alipay">*/}
                        {/*<a href="https://ant.design" target="_blank" rel="noopener noreferrer">*/}
                            {/*Navigation Four - Link*/}
                        {/*</a>*/}
                    {/*</Menu.Item>*/}
                </Menu>
            </div>
        );
    }
}

export default MenuNav;