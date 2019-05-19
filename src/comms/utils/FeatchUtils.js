/**
 * Created by liusonglin on 2018/7/13.
 */
import axios from 'axios';
import { message } from 'antd';

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );

const instance = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token'
});

export function getHeader() {
    let auth;
    try {
        auth = JSON.parse(localStorage.getItem('Authorization'));
    } catch (e) {
        console.log(e);
    }
    return {
     //   'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json;charset=UTF-8',
        'Authorization': auth?(auth.accessToken?auth.accessToken:''):''
    }
}
instance.defaults.timeout = 100001

//添加请求拦截器
/*instance.interceptors.request.use(function(config){
    if(config.url.indexOf('ByPage')!==-1 && !config.params.page){
        config.params={'page':1,'rows':defaultPageSize,...config.params}
    }
    if(!isLocalhost && config.url.indexOf('http')===-1){
        config.url=host+config.url
    }
    return config;
},function(error){
    return Promise.reject(error);
});*/

//添加一个响应拦截器
instance.interceptors.response.use(function (response) {
    // 1.成功
    if (response.status===200) {
        return response.data;
    }
    // 3.其他失败，比如校验不通过等
    message.error(response.msg)
    return Promise.reject(response.data);
}, function (err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400: err.message = '请求错误(400)' ; break;
            case 401: err.message = '未授权，请重新登录(401)'; break;
            case 403: err.message = '拒绝访问(403)'; break;
            case 404: err.message = '请求出错(404)'; break;
            case 408: err.message = '请求超时(408)'; break;
            case 500: err.message = '服务器错误(500)'; break;
            case 501: err.message = '服务未实现(501)'; break;
            case 502: err.message = '网络错误(502)'; break;
            case 503: err.message = '服务不可用(503)'; break;
            case 504: err.message = '网络超时(504)'; break;
            case 505: err.message = 'HTTP版本不受支持(505)'; break;
            default: err.message = `连接出错(${err.response.status})!`;
        }
        if(err.response.status === 401){
            localStorage.removeItem('Authorization');
            localStorage.removeItem('Right');
            localStorage.removeItem('_s');
            return;
        }
        if(err.response.data){
            err.message = err.message+"  "+err.response.data.msg
        }
    }else{
        err.message = '连接服务器失败!'
    }
    return Promise.reject({
        messageCode: err.message
    });
});

export default {
    //get请求
    get (url,param={}) {
        // let params = buildPara(param)
        return new Promise((resolve,reject) => {
            instance({
                method: 'get',
                headers: getHeader(),
                url,
                params: param
            }).then(res => {
                resolve(res)
            }).catch(err =>{
                message.error(err.messageCode)
                reject(err)
            })
        })
    },
    //post请求
    post (url,param={}) {
        /*let params = buildPara(param)*/
        return new Promise((resolve,reject) => {
            instance({
                method: 'post',
                headers: getHeader(),
                url,
                params: param,
            }).then(res => {
                resolve(res)
            }).catch(err =>{
                message.error(err.messageCode)
                reject(err)
            })
        })
    },
    postJson(url,data={}){
        return new Promise((resolve,reject) => {
            instance({
                method: 'post',
                headers: getHeader(),
                url,
                data: data,
            }).then(res => {
                resolve(res)
            }).catch(err =>{
                message.error(err.messageCode)
                reject(err)
            })
        })
    }
}

