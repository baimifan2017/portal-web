
import request from  '../request'
import requestQuery from '../requestQuery'
const baseUrl= '/smefp-im-web/'

const govMoudleId = 'DFDFD933-7AC7-11E8-8A0B-784F437A721F'
const finacingMoudleId = 'F9EE8884-7AC7-11E8-8A0B-784F437A721F'
//左侧导航按钮
export async function getNavButton(params) {
    return requestQuery(baseUrl+'noticeSet/findDataByModuleId','POST',{moduleId:govMoudleId})
}
//tab切换获取
export async function getIntroduce(columnId,setId) {
    return requestQuery(baseUrl+'notice/findDataByCondition','GET',
        {setId:setId,moduleId:govMoudleId,columnId: columnId,
            currentPage: 0,pageSize: 15})

}

//根据id获得部门介绍详情
export async function getIntroduceDetail(id) {
    return requestQuery(baseUrl+'notice/findDataById','GET',
        {id:id})

}
