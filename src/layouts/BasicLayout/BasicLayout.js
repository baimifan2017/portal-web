/**
 * 基础布局
 * @props: breadcrumb 头部面包屑参数
 * breadcrumb为空时，第一个dom节点将放入头部
 *
 * create by huyu_ ON 2018/11/7
 */

import React from "react"
import {Layout} from "antd"
import BreadcrumbHead from "../../components/BreadcrumbHead/BreadcrumbHead"
import "./BasicLayout.css"

const {Header} = Layout;

export default class BasicLayout extends React.Component{
    render(){
        const {breadcrumb, children,style }= this.props;

        return (
            <div className="basic-layout" style={style}>
                {
                    (!!breadcrumb && breadcrumb instanceof Array) ? <BreadcrumbHead breadcrumb={breadcrumb} /> : <Header>{children[0]}</Header>
                }
                <div className="basic-layout-content">
                    {  (!!breadcrumb && breadcrumb instanceof Array) ?
                        children:
                        React.Children.map(this.props.children, (child, i) => {
                            if(i) return child;
                        })
                    }
                    </div>
            </div>
        )
    }
}

