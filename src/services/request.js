/**
 *createBy:lzh
 *createTime:2019-3-5
 */

import {message} from 'antd';
import axios, {transformRequest} from '../comms/utils/axios'
import {store} from '../redux/store'
import {show, hide} from '../redux/GlobalReducer'


export default function relRequest(objctUrl, method, objecData) {
    store.dispatch(show());

    if (method == "post" || method == "POST") {
        return axios({
            method: method || 'POST',
            url: objctUrl,
            data: objecData,
            transformRequest: transformRequest,
        }).then(
            (res) => {
                store.dispatch(hide())
                return res
            }
        ).catch(
            (err) => {
                store.dispatch(hide())
                message.error(err.messageCode)
            }
        );

    }
    return axios({
        method: method || 'GET',
        url: objctUrl,
        params: objecData || null,
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            "Authorization": localStorage.getItem('token')
            // 'token':localStorage.getItem('token'),
        }
    }).then(
        (res) => {
            // console.log(res.data);
            store.dispatch(hide())
            return res.data
        }
    ).catch(
        (err) => {
            message.error(err.messageCode)
            store.dispatch(hide())
        }
    );


}

