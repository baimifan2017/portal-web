import React,{Component,Fragment} from "react";
import {Link} from "react-router-dom"
export default class IndexView extends Component{
    render() {
        return(
            <header>
                <ul>
                    <li><Link to={'/stepeOne'}>注册第一步</Link></li>
                    <li><Link to={'/stepeTwo'}>注册第二步</Link></li>
                    <li><Link to={'/stepThir'}>注册第三步</Link></li>
                    <li><Link to={'/login'}>登录页面</Link></li>
                </ul>
            </header>
        )
    }
}