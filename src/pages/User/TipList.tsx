import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import colorConfig from '../../constants/color'

const styles = StyleSheet.create({
  tipWrapper: {
    ...colorConfig.flexBetween
  }
});
type ItemProps = {
  data: any;
}
const TipItem: React.FunctionComponent<ItemProps> = ({data = {}}) => {
  return (
    <View>
      <View><Text>{data.icon}</Text></View>
      <View style={{paddingTop: 20, paddingBottom: 10}}>
        <Text
          style={{color: colorConfig.title, fontSize: 16}}
        >{data.title}
        </Text>
      </View>
      <View><Text style={{color: colorConfig.subTitle, fontSize: 14}}>{data.subTitle}</Text></View>
    </View>
  )
}
type Props = {}
const TipList: React.FunctionComponent<Props> = () => {
  const tipList = [
    {
      icon: 'test',
      title: '主题换肤',
      subTitle: '精选主题',
      key: '11'
    },
    {
      icon: '',
      title: '网易来钱',
      subTitle: '高额低息',
      key: '22'
    },
    {
      icon: '',
      title: '天天领红包',
      subTitle: '签到赚钱',
      key: '33'
    },
  ]
  return (
    <View style={styles.tipWrapper}>
      {tipList.map(item => (<TipItem key={item.key} data={item}/>))}
    </View>
  );
}

export default TipList;
