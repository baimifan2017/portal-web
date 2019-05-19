/**
 * 录入方式转中文
 */
export function inputType2CN(value){ 
    return {
        "0": "初始",
        "1": "手动",
        "2": "自动"
    }[value] || value;
}

/**
 * 票据介质转中文
 * @param value
 * @returns {*}
 */
export const billMedia2CN = value => {
    return {
        0: "纸质票据",
        1: "电子票据"
    }[value] || value;
};

/**
 * 票据种类转换
 * @param value
 * @returns {{}}
 */
export const billType2CN = value => {
    return {
        "AC01": "银行承兑汇票",
        "AC02": "商业承兑汇票"
    }[value] || value;
};

/**
 * 出票方式转换
 * @param value
 * @returns {*}
 */
export const tranType2CN = value => {
    return {
        "0": "不选择",
        "1": "循环额度",
        "2": "质押"
    }[value] || value;
};

/**
 * 背书数据来源
 * @param value
 * @returns {*}
 */
export const endorseSourceType2CN = value => {
    return {
        "0": "SAP",
        "1": "手工新增"
    }[value] || value;
};

/**
 * 背书状态
 * @param value
 * @returns {*}
 */
export const endorseStateType2CN = value => {
    return {
        "60": "待背书",
        "63": "背书中",
        "67": "已背书"
    }[value] || value;
};

/**
 * 票据处理状态
 * @param value
 * @returns {*}
 */
export const billDealState2CN = value => {
    return {
        "25": "持有票据",
    }[value] || value;
};

/**
 * 背书途径
 * @param value
 * @returns {*}
 */
export const endorseWayType2CN = value => {
    return {
        "0": "线下背书",
        "1": "银企背书"
    }[value] || value;
};

/**
 * 是否
 * @param value
 * @returns {*}
 */
export const trueOrFalseType2CN = value => {
    return {
        "true": "是",
        "false": "否"
    }[value] || value;
};

/**
 * 转让标识
 * @param value
 * @returns {*}
 */
export const reciteFlagType2CN = value => {
    return {
        "0": "可再转让",
        "1": "不得转让"
    }[value] || value;
};


/**
 * 审批状态
 * @param value
 * @returns {*}
 */
export const drawBillFlow = value => {
    return {
        "INIT": "初始状态",
        "INPROCESS": "流程中",
        "COMPLETED":"审批完成"
    }[value] || value;
};