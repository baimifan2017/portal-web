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