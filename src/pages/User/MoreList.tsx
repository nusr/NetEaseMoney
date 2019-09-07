import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';

import colorConfig from '../../shared/color'


const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,

  },
  itemWrapper: {
    ...colorConfig.flexBetween,
    borderBottomColor: colorConfig.borderColor,
    borderBottomWidth: 1,
  }
})
const iconConfig = {
  color: '#b8b8b8',
  fontSize: 20
}

function MoreItem(props) {
  const {data = {}} = props
  console.log(data)
  const Icon = data.icon
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.item}>
        <View style={{paddingRight: 10}}>
          <Text>
            {data.icon && (<Icon />)}
          </Text>
        </View>
        <View>
          <Text style={{color: colorConfig.title, fontSize: 16}}>{data.title}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={{paddingRight: 10}}>
          <Text style={{color: '#999', fontSize: 16}}>
            {data.subTitle}
          </Text>
        </View>
        <View>
          <Text style={{color:'#d0d0d0',fontSize:16}}>
              >
          </Text>
        </View>
      </View>
    </View>
  )
}


export default function MoreList(props) {
  const {
    data = [
      {
        title: '合规贷款：找小米',
        subTitle: '广告',
        icon: ()=>(<Text style={iconConfig}>shield-alt</Text>),
        path: '',
        id: '00'

      },
      {
        title: '开通VIP',
        subTitle: '支持导出账单，专属皮肤',
        icon: ()=>(<Text style={iconConfig}>shield-alt</Text>),
        path: '',
        id: '11'
      },
      {
        title: '我的福利',
        subTitle: '热门活动',
        icon: ()=>(<Text style={iconConfig}>gift</Text>),
        path: '',
        id: '22'
      },
      {
        title: '我的客服',
        subTitle: '联系客服',
        icon: () => (<Text style={iconConfig}>customerservice</Text>),
        path: '',
        id: '33'
      },
      {
        title: '邀请好友得VIP',
        subTitle: '立即邀请',
        icon: ()=>(<Text style={iconConfig}>shield-alt</Text>),
        path: '',
        id: '44'
      },
      {
        title: '实用工具',
        subTitle: '房贷计算器',
        path: '',
        id: '55',
        icon: ()=>(<Text style={iconConfig}>tools</Text>)
      },
    ]
  } = props
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id || index}
        renderItem={({item}) => (<MoreItem data={item} />)}
      />
    </View>
  );

}

