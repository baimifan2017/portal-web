import request from  '../request'
import requestQuery from '../requestQuery'
const baseUrl= '/smefp-im-web/'
/*企业注册*/

/*注册第一步*/
//提交注册
export async function stepOneSubmit(params) {
    return request(baseUrl+'register/saveLoginInfo','POST',params)
}
//验证社会信用代码是否存在
export async function verficSocialCode(params) {
    return requestQuery(baseUrl+'register/isHaveCode','POST',params)
}
//验证企业登录名称是否存在
export async function verficLoginName(params) {
    return requestQuery(baseUrl+'register/isHaveLoginName','POST',params)
}

/*注册第二步*/
//获取行业分类、企业类型
export async function loadTwoInfo(params) {
    return request(baseUrl+'dimComm/findDataByDimTableName','POST',params)
}
//提交注册
export async function stepTwoSubmit(params) {
    return request(baseUrl+'register/saveRegisterInfo','POST',params)
}


/*注册第三步*/
//获取企业关注内容、企业标签
export async function loadThirInfo(params) {
    return request(baseUrl+'dimComm/findDataByDimTableName','POST',params)
}
//提交注册
export async function stepThirSubmit(params) {
    return request(baseUrl+'register/saveEntInfo','POST',params)
}