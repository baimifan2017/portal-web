/**
 * @description
 * @autor liusonglin
 * @date 2018/8/28.
 */
import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import httpUtils  from "../comms/utils/FeatchUtils";
import { defaultAppCode ,SEVER_HOST} from "./api-config";
import queryString from "query-string";
import { Spin } from 'antd';

class PrivateRoute extends Component {
    constructor(props){
        super(props)
        this.state ={
            // hasToken:false
            hasToken: true
        }
    }
    componentWillMount1(){
        let urlParams = queryString.parse(this.props.location.search)
        console.log(urlParams)
        if(urlParams && urlParams._s){
            localStorage.removeItem('Authorization');
            localStorage.removeItem('Right');
            localStorage.removeItem('_s');
            httpUtils.get(SEVER_HOST+"/basic-web/checkToken?_s="+urlParams._s+'&AppCode='+defaultAppCode.toString()).then(res => {
                if(res.success){
                    localStorage.setItem('Authorization',JSON.stringify(res.data[0]));
                    localStorage.setItem('Right',JSON.stringify(res.data[1]));
                    localStorage.setItem('_s',urlParams._s);
                    this.setState({hasToken:res.success});
                }else {
                    window.location.replace(SEVER_HOST+"/login");
                }
            })
        }else {
            if(localStorage.getItem('Authorization')){
                this.setState({hasToken:true});
            }else {
                window.location.replace(SEVER_HOST+"/login");
            }
        }
    }

    render(){
        const { component: Component, ...rest } = this.props
        return (
            <Route
                {...rest}
                render={props =>
                    this.state.hasToken?
                        <Component {...props} /> :
                        <Spin tip="加载中..."style={{marginTop:"50px"}}>加载中...</Spin>
                }
            />
        )

    }
}

export default PrivateRoute