
const CURRENTBUTTON_INFO = 'tab_info'
const defaultState = {
    tabInfo:[]
}


export default function (state=defaultState, action) {

    if (action.type===CURRENTBUTTON_INFO) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.tabInfo = action.value
        return newState;

    }
    return state

}


export const currentButtonInfo =(value)=>{
    return { type: CURRENTBUTTON_INFO, value }
}