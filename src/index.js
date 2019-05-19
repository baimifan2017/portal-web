import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {LocaleProvider} from "antd";
import {store} from './redux/store'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {Provider} from 'react-redux'

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <Provider store={store} >
            <App />
        </Provider>
    </LocaleProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
