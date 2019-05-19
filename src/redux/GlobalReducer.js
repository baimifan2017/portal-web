/**
 * 用途：控制加载状态
 */
const SHOW = 'SHOW'
const HIDE = 'HIDE'
const defaultState = {
    loadings:false,
}


export default function (state, action) {
    if (!state) {
        state = defaultState
    }

    switch (action.type) {
        case SHOW:
            return{
                loadings:action.value
            }
        case HIDE:{
            return{
                loadings:action.value
            }

        }
        default:
            return state
    }
}

export const show =() => {
    return { type: 'SHOW',value:true }
}

export const hide =() => {
    return { type: 'HIDE', value:false }
}

