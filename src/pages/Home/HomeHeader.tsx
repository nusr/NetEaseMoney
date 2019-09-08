import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import colorConfig from '../../constants/color'
import {showNum} from '../../utils'
import Icon,{IconNames} from '../../iconfont/Icon'
const styles = StyleSheet.create({
  container: {
    color: colorConfig.white,
    paddingLeft: colorConfig.basePadding,
    paddingRight: colorConfig.basePadding,
    paddingTop: 60
  },
  outWrapper: {
    ...colorConfig.flexBetween,
    paddingTop: 30
  },
  contentWrapper: {
    ...colorConfig.flexBetween,
    paddingTop: 30,
    paddingBottom: 30
  },
  title: {
    fontSize: colorConfig.baseFontSize,
    color: colorConfig.lightGray
  },
  number: {
    fontSize: colorConfig.baseFontSize,
    color: colorConfig.white,
    paddingLeft: 15,
    paddingRight: 15
  },
  item: colorConfig.flexBetween
})
const iconList: IconNames[] = ['eye','eye-hide']
const getSnow = (num: number): string => {
  const result = []
  for (let i = 0; i < num; i += 1) {
    result.push('*')
  }
  return result.join('')
}
type Props = {
  data?: {
    out: number;
    in: number;
    other: number;
  };
}
const HomeHeader: React.FunctionComponent<Props> = (props: Props) => {
  console.log(props)
  const {data = {out: 19300, in: 1102, other: 130610}} = props
  const [hideMoney, toggleHide] = useState(false)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>本月支出(元)</Text>
      </View>
      <View style={styles.outWrapper}>
        <Text style={{
          fontSize: colorConfig.baseFontSize * 2,
          color: colorConfig.white
        }}
        >{!hideMoney ? showNum(data.out) : getSnow(6)}
        </Text>
        <TouchableOpacity onPress={() => toggleHide(!hideMoney)} activeOpacity={colorConfig.touchOpacity}>
          <Icon name={iconList[+hideMoney]} color={colorConfig.lightGray}>
          </Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.item}>
          <Text style={styles.title}>本月收入</Text>
          <Text style={styles.number}>{!hideMoney ? showNum(data.in) : getSnow(3)}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>预算剩余</Text>
          <Text style={styles.number}>{!hideMoney ? showNum(data.other) : getSnow(3)}</Text>
        </View>
      </View>
    </View>
  )
}
export default HomeHeader;
