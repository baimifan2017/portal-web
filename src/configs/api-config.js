const apiServerConfig = JSON.parse(window.atob(localStorage.getItem('apiServerConfig')))

/* API接口应用代理路径 */
const rewrite ={
    // 项目代理路径【做前后端分离时，需要在Nginx中配置这个做为代理解决跨域，本地测试时，需要在package.json中配置proxy】
    // 生产环境用api.server配置的地址，否则使用config-overrides代理的地址
    baserUrl:process.env.NODE_ENV!=='production'?'/localHost/':apiServerConfig.fms_web_baseUrl
}

export const SEVER_HOST = rewrite.baserUrl;
export const defaultAppCode = rewrite.defaultAppCode;
export const AUTHORURL = rewrite.author