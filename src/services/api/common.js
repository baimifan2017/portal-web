
import relRequest from  '../request'
import requestQuery from '../requestQuery'
const baseUrl= '/smefp-im-web/'
//政府
const govMoudleId = 'DFDFD933-7AC7-11E8-8A0B-784F437A721F'
const finacingMoudleId = 'F9EE8884-7AC7-11E8-8A0B-784F437A721F'
//左侧导航按钮
export async function getNavTab(url,id) {
    return relRequest(baseUrl+url,'POST',{moduleId:govMoudleId,setId:id})
}

