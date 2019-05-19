import React,{Component} from 'react';
import './App.css';
import {Spin} from "antd";
import {connect} from 'react-redux'
import Router from './configs/routers'

class App extends Component {
    render() {
        return (
            <div style={{background:'#f0f2f5'}}>
                <div style={{margin: '0px 0px 0px',background:'#fff'}}>
                    <Spin tip="加载中..." spinning={this.props.loadings} style={{marginTop:"50px"}}>
                        <Router/>
                    </Spin>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        loadings: state.GlobalReducer.loadings
    }
}

export default connect(
    mapStateToProps
)(App)
