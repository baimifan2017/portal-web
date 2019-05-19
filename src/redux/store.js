import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {CombineReducer} from './CombineReducer';

/* 创建整个应用的中间件 */
const middleware = [thunk];

/* 生产环境时不使用日志中间件 */
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

/* 将整个应用的state放入统一存储对象store */
export const  store = createStore(
    CombineReducer,
    applyMiddleware(...middleware)
);

