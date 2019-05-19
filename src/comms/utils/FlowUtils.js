import httpUtils from "./FeatchUtils";
import { message } from 'antd';

/* eslint-disable react/prefer-stateless-function,no-undef,react/no-redundant-should-component-update,react/no-unused-state */
export function openFlowTabe({title,height=1000,baseUrl,pageUrl}) {
    EUI.FlowApprove({
        iframeTitle: title,
        iframeHeight: height,
        renderTo: 'flowContent',
        baseUrl: baseUrl,
        pageUrl: pageUrl,
      });
}

export function startFlow({url,businessKey,businessModelCode,callBack,name='待审批'}) {
    let formData = new FormData();
    formData.append('businessKey',businessKey);
    formData.append('businessModelCode',businessModelCode);
    httpUtils.postJson(url,formData).then(res=>{
        let taskList = []
        if(res.success && res.data.nodeInfoList){
            const { id, flowDefKey } = res.data.flowTypeList[0];
            res.data.nodeInfoList.forEach(item => {
                taskList.push({
                  nodeId: item.id,
                  userVarName: item.userVarName,
                  option: name,
                  flowTaskType: item.flowTaskType,
                  instancyStatus: item.allowChooseInstancy,
                });
              });
              formData.append('taskList',JSON.stringify(taskList));
              formData.append('flowDefKey',flowDefKey);
              formData.append('typeId',id);
              httpUtils.postJson(url,formData).then(res => {
                  if(res.success){
                      if(callBack){
                          callBack(res)
                      }else{
                          message.success('提交审核成功');
                      }
                  }else{
                    message.error(res.msg);
                  }
              })
        }else{
            if(res.success){
                message.warn('启动流程失败，请检查数据');
            }else{
                message.warn(res.msg);
            }
            
        }
    })
}