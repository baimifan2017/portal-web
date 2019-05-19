import React, {Component} from 'react';
import Header from '../../components/header/Header'
class MainLayOut extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{marginTop:'50px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainLayOut;