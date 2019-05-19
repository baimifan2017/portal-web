import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
	//当创建实例的时候配置默认配置
	timeout:6000,
	// headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
});

export const transformRequest = [function (data) {
	// Do whatever you want to transform the data
	let ret = ''
	for (let it in data) {
		ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	}
	ret = ret.slice(0,ret.length-1)
	return ret
}];
//添加请求拦截器
instance.interceptors.request.use(function(config){
	/*if(config.url.indexOf('ByPage')!==-1 && !config.params.page){
		config.params={'page':1,'rows':defaultPageSize,...config.params}
	}
	if(!isLocalhost && config.url.indexOf('http')===-1){
		config.url=host+config.url
	}*/
	return config;
},function(error){
	return Promise.reject(error);
});

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

export default instance;
