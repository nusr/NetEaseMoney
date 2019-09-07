import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import colorConfig from '../../shared/color'

const styles = StyleSheet.create({
  tipWrapper: {
    ...colorConfig.flexBetween
  }
});

function TipItem(props) {
  const {data = {}} = props
  console.log(data)
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

export default function TipList() {
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
    /*        {
                    icon: 'test2',
                    title: '赚钱这么快',
                    subTitle: '广告',
                    key: '44'
                }, */
  ]
  return (
    <View style={styles.tipWrapper}>
      {tipList.map(item => (<TipItem key={item.key} data={item} />))}
    </View>
  );
}

