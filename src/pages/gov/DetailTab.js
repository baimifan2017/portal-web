import React, {Component} from 'react';
import { Tabs } from 'antd';
import {store} from '../../redux/store'
import {getIntroduce,getIntroduceDetail} from '../../services/api/gov'
const TabPane = Tabs.TabPane;




const haveTriger = false
class DetailTab extends Component {
    constructor(props){
        super(props)
        this.state={
            currentInfo:store.getState().reducer.tabInfo
        }
        store.subscribe(this.handleUpData)
    }
    handleUpData=()=>{
        console.log(store.getState().reducer.tabInfo)
        this.setState({
            currentInfo:store.getState().reducer.tabInfo
        })
    }
    callback(coulumId) {
        const currentInfo = this.state.currentInfo
        console.log(currentInfo);
        //tabInfo中id为columId
        let len = currentInfo.length
        if (currentInfo) {
            let results = getIntroduce(coulumId,store.getState().reducer.tabInfo[len-1].setId)
            // if(results){
            //     let detail = getIntroduceDetail();
            //     this.setState({
            //         introduceDetail:detail
            //     })
            // }
        }
    }

    render() {
        const currentInfo = this.state.currentInfo
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    {
                        currentInfo?currentInfo.map((item,index)=>{
                            return(
                                <TabPane tab={item.name} key={item.id}>


                                </TabPane>
                            )
                        }):null
                    }

                </Tabs>
            </div>
        );
    }
}

export default DetailTab;