import {NavigationActions, StackActions} from 'react-navigation';

export function resetNavigation(navigation, routeName) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName})]
    });
    navigation.dispatch(resetAction);
};

// 为了防止精度损失，数字存储为整数

export function showNum(num) {
    const temp = num % 100;
    const intPart = Math.floor(num / 100);
    let decimalPart = temp;
    if (temp === 0) {
        decimalPart = '00'
    } else if (temp < 10) {
        decimalPart = `0${decimalPart}`
    }
    return `¥${intPart.toLocaleString()}.${decimalPart}`
}


