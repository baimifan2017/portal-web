import moment from 'moment';

/**
 * Created by liusonglin on 2018/7/13.
 */
export function searchList(data, searchParam) {
    let result = []
    let list
    let flag = true
    if (data.rows) {
        list = data.rows
    } else {
        list = data;
    }
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        let keys = Object.keys(searchParam)
        for (let j = 0; j < keys.length; j++) {
            let key = keys[j]
            let value = item[key]
            if (value && searchParam[key]) {
                flag = false
                if (value.includes(searchParam[key])) {
                    result.push(item)
                }
            }
        }
    }
    return flag ? data : result;
}

export async function searchListByKey(data, searchParam, keys = []) {
    let result = []
    let list
    let flag = true
    if (data.rows) {
        list = data.rows
    } else {
        list = data;
    }
    let excludeKey = [];
    if (keys.length === 0) {
        excludeKey = ['id', 'tenantCode']
    }
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        if (keys.length === 0) {
            keys = Object.keys(item)
        }
        for (let j = 0; j < keys.length; j++) {
            let key = keys[j]
            if (excludeKey.indexOf(key) !== -1) {
                continue;
            }
            let value = item[key];
            if (value && searchParam.keyword && !isEmpty(searchParam.keyword)) {
                flag = false
                if (typeof value === 'string'
                    && value.includes(searchParam.keyword)) {
                    result.push(item)
                    break;
                }
            }
        }
    }
    return flag ? list : result;
}

export function isEmpty(val) {
    return val === undefined || val === null || val === '' || val === "" || (typeof val === 'string' && val.trim() === '')
}

export function checkRight(rightName) {
    let rights = JSON.parse(localStorage.getItem('Right'));
    if (rights == null) {
        return false;
    }
    return rights.indexOf(rightName) !== -1;
}

export function getUserInfo() {
    return JSON.parse(localStorage.getItem('Authorization'))
}

export function openNewTab(uri, title, closeCurrent = false, id = undefined) {
    let element = window.parent.document.getElementsByClassName('child_item')
    let currentId = null;
    if (element) {
        for (let i = 0; i < element.length; i++) {
            let e = element[i];
            if (e.textContent === title) {
                id = e.id
            }
        }
        if (closeCurrent) {
            let currentTab = window.parent.document.getElementsByClassName('ux-tab-actived')
            if (currentTab && currentTab.length > 0) {
                currentId = currentTab[0].getAttribute('tabId');
            }
        }
        if (window.top.homeView) {
            if (!id) {
                id = getUUID()
            }
            if(uri.indexOf('http://')===0){
                window.top.homeView.addTab({
                    title: title,
                    url: uri,
                    id: id
                });
            }else{
                window.top.homeView.addTab({
                    title: title,
                    url: "http://decmp.changhong.com/srm-web" + uri,
                    id: id
                });
            }
        } else {
            window.open("http://decmp.changhong.com/srm-web" + uri);
        }
        if (currentId) {
            window.top.homeView.getTabPanel().close(currentId);
        }
    }
}


function getUUID() {
    return Math.random().toString(36).substr(2);;
}

export function convertDataToFormData(data) {
    let formData = new FormData();
    if (isEmpty(data)) {
        return formData;
    }
    //如果传进对象为数组  返回数组
    if (data instanceof Array) {
        return data;
    }
    Object.keys(data).forEach((item) => {
        if (data[item] instanceof Array) {
            for (let value of data[item].values()) {
                formData.append(item, value);
            }
        } else if (data[item] instanceof Object) {
            for (let key of Object.keys(data[item])) {
                formData.append(item + '.' + key, data[item][key]);
            }
        } else {
            formData.append(item, data[item]);
        }
    });
    return formData;
}

moment.prototype.toJSON = function () {
    return moment(this).format("YYYY-MM-DD HH:mm:ss")
}