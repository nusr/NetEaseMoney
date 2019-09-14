import {NavigationActions, StackActions} from 'react-navigation';
export function timeFormat(time: number): string {
  const date: Date = new Date(time);
  if (date.toDateString() === new Date().toDateString()) {
    return '今天';
  }
  const month = date.getMonth();
  const day = date.getDate();
  return `${month + 1}月${day}日`;
}
export function resetNavigation(navigation: any, routeName: string) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName})],
  });
  navigation.dispatch(resetAction);
}

// 为了防止精度损失，数字存储为整数

export function showNum(num: number): string {
  const temp = num % 100;
  const intPart = Math.floor(num / 100);
  let decimalPart: string = temp + '';
  if (temp === 0) {
    decimalPart = '00';
  } else if (temp < 10) {
    decimalPart = `0${decimalPart}`;
  }
  return `¥${intPart.toLocaleString()}.${decimalPart}`;
}
