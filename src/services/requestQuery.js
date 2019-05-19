
/**
 *createBy:lzh
 *createTime:2019-3-5
 */

// import axios from 'axios';
import { message } from 'antd';
import axios,{transformRequest} from '../comms/utils/axios'

export default function relRequest(objctUrl, method,objecData){
    if(method=="post"||method=="POST"){
        return axios({ 
            method: method||'POST',
            url: objctUrl,
            data:objecData,
            transformRequest:transformRequest,
        }).then(
            (res)=>{
                // console.log('=======res========')
                // console.log(res)
                return  res
                }
        ).catch(
            (err)=>{
                message.error(err.messageCode)
            }
        );
        
    }
        return axios({
            method: method||'GET',
            url: objctUrl,
            params:objecData||null,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                // 'token':localStorage.getItem('token'),
            }
        }).then(
            (res)=>{
                return  res.data
                }
        ).catch(
            (err)=>{
                message.error(err.messageCode)
            }
        );
    
    
}

