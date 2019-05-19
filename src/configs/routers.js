import React,{Component} from "react";
import {Switch,BrowserRouter as Router} from "react-router-dom";
import Route from './PrivateRoute'
import IndexView from './IndexView'
// import Gov from '../pages/gov/Gov'
import StepOne from '../pages/regist/StepOne'
import StepTwo from '../pages/regist/StepTwo'

import StepThir from '../pages/regist/StepThir'
import LoginForm from '../components/header/Login'
import MainLayOut from '../layouts/mainLayOut/MainLayOut'
import IndexMain from '../pages/index/IndexMain'
import Index from '../pages/index/Index'
import Gov from '../pages/gov/Gov'
export default class Routers extends Component{
    render() {
        return(
            <Router >
                <Switch>
                    <Route path={'/'} component={IndexView} exact={true}/>
                    <Route path={'/stepeOne'} component={StepOne}/>
                    <Route path={'/stepeTwo'} component={StepTwo}/>
                    <Route path={'/stepThir'} component={StepThir}/>
                    <Route path={'/login'} component={LoginForm}/>


                    {/*<Route path={'/index'} component={IndexMain}/>*/}
                    <IndexMain path={'/index'}>
                        <Route path={'/index/indexV'} component={Index}/>
                        <Route path={'/index/gov'} component={Gov}/>
                    </IndexMain>
                    {/*<Route path={'/main'} component={MainLayOut}>*/}

                    {/*</Route>*/}

                    <MainLayOut path={'/main'} >
                        <Route path={'/main/stepeOne'} component={StepOne}/>
                    </MainLayOut>
                </Switch>

            </Router>
        )
    }
}