/**
 *  工具包
 * create by huyu_ ON 2018/12/19
 */

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
 * 票据处理状态转中文
 * @param value
 * @returns {*}
 */
export const billDealState2CN = value => {
    return {
        20: "票据草稿",
        25: "持有票据",
        60: "待背书",
        63: "背书中",
        67: "已背书",
        70: "待贴现",
        73: "贴现中",
        77: "已贴现",
        80: "待托收",
        83: "托收中",
        87: "已托收"
    }[value] || value;
};