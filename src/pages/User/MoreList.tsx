import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import Icon from '../../iconfont/Icon';
import colorConfig from '../../constants/color';
import { UserItemType } from '../../type'
const iconColor = '#b8b8b8'
const DEFAULT_DATA: UserItemType[]= [
  {
    title: '合规贷款：找小米',
    subTitle: '广告',
    icon: () => <Icon color={iconColor} name="shield"/>,
    path: '',
    id: '00',
  },
  {
    title: '开通VIP',
    subTitle: '支持导出账单，专属皮肤',
    icon: () => <Icon color={iconColor} name="shield"/>,
    path: '',
    id: '11',
  },
  {
    title: '我的福利',
    subTitle: '热门活动',
    icon: () => <Icon color={iconColor} name="gift"/>,
    path: '',
    id: '22',
  },
  {
    title: '我的客服',
    subTitle: '联系客服',
    icon: () => <Icon color={iconColor} name="call-center"/>,
    path: '',
    id: '33',
  },
  {
    title: '邀请好友得VIP',
    subTitle: '立即邀请',
    icon: () => <Icon color={iconColor} name="invite"/>,
    path: '',
    id: '44',
  },
  {
    title: '实用工具',
    subTitle: '房贷计算器',
    path: '',
    id: '55',
    icon: () => <Icon color={iconColor} name="tool"/>,
  },
]
const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
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
  },
});

type ItemProps = {
  data: UserItemType;
};
const MoreItem: React.FunctionComponent<ItemProps> = ({ data }) => {
  const IconOther = data.icon;
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.item}>
        <View style={{paddingRight: 10}}>
          <Text>{data.icon && <IconOther />}</Text>
        </View>
        <View>
          <Text style={{color: colorConfig.title, fontSize: 16}}>
            {data.title}
          </Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={{paddingRight: 10}}>
          <Text style={{color: '#999', fontSize: 16}}>{data.subTitle}</Text>
        </View>
        <View>
          <Icon size={16} color={colorConfig.iconColor} name="right-arrow" />
        </View>
      </View>
    </View>
  );
};

type Props = {
  data?: UserItemType[];
};
const MoreList: React.FunctionComponent<Props> = ({data = DEFAULT_DATA}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item: UserItemType, index: number): string => item.id || String(index)}
        renderItem={({item}) => <MoreItem data={item} />}
      />
    </View>
  );
};

export default MoreList;
