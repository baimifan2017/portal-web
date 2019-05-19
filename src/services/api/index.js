import request from  '../request'
import requestQuery from '../requestQuery'
const baseUrl= '/smefp-im-web/'

const indexMoudleId = 'BF925902-7AC7-11E8-8A0B-784F437A721F'
//获取模块id
export async function getModuleId(params) {
    return requestQuery(baseUrl+'noticeModule/findAllDatax','POST',params)
}

//获取统计
export async function statics(params) {
    return request(baseUrl+'statistics/getStatisticsDataForIndex','POST',params)
}

//加载新闻
export async function loadNews(params) {
    return request(baseUrl+'notice/findDataForIndex','POST',{ moduleId:indexMoudleId,limit:6})
}

//加载友情链接
export async function loadLinks(params) {
    return request(baseUrl+'link/getAllDataForIndex','POST',{ moduleId:indexMoudleId,limit:6})
}


//加载融资工具
export async function loadFinacingTools(params) {
    return request(baseUrl+'finProduct/findDataForIndex','POST',{ limit:6})
}

//加载融资成果

export async function loadFinacingMap(params) {
    return requestQuery(baseUrl+'statistics/findDataForIndexGroupByArea','POST',{ limit:6})
}