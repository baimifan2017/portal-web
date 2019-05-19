import React, {Component,Fragment} from 'react';
import BasicLayOut from '../../layouts/BasicLayOut'
import {PageHeader} from 'antd'
import DetailTab from './DetailTab'
import {getNavButton} from '../../services/api/gov'
/*发布融资需求*/


class Gov extends Component {
    constructor(props){
        super(props)
        this.state={
            navButton:[
                {id:"BF925902-7AC7-11E8-8A0B-784F437A721F", name:"首页", rank:0}]
        }
    }
    async componentWillMount() {
        let navButton = await getNavButton()
        if(navButton){
            this.setState({
                navButton:navButton
            })
        }
    }

    render() {
        return (
            <Fragment>
                <BasicLayOut title={'政府服务'}
                             navButton={this.state.navButton}
                             url={'noticeColumn/findDataByModuleIdAndSetId'}
                             moudleId={'DFDFD933-7AC7-11E8-8A0B-784F437A721F'}
                >
                    <DetailTab></DetailTab>
                </BasicLayOut>
            </Fragment>
        );
    }
}

export default Gov;