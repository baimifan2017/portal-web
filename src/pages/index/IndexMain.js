import React, {Component} from 'react';
import Header from '../../components/header/Header'
import {HashRouter,Link} from 'react-router-dom'
class IndexMain extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        // this.props.history.push("/index/indexV")
    }
    render() {
        return (
            <div>
                <Header/>
                <div style={{clear:'both'}}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default IndexMain;