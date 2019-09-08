import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colorConfig from '../../constants/color';
import Icon from '../../iconfont/Icon';
const styles = StyleSheet.create({
  container: {
    padding: 20,
    zIndex: 4,
    backgroundColor: colorConfig.checkHeader,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  more: {
    right: 0,
    position: 'absolute',
  },
  main: {
    paddingTop: 20,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
  },
});
type Props = {
  noScroll: boolean;
};
const CheckHeader: React.FunctionComponent<Props> = ({noScroll = false}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View>
          <Text
            style={{
              color: colorConfig.white,
              fontSize: colorConfig.baseFontSize,
            }}>
            账单
          </Text>
        </View>
        <View style={styles.more}>
          <Icon name="more"/>
        </View>
      </View>
      <View style={styles.main}>
        <View>
          <Text style={{color: colorConfig.white}}>2019</Text>
        </View>
        <View style={styles.scroll}>
          {!noScroll && <Text style={{color: '#8c80ac'}}>月份</Text>}
        </View>
        <View style={styles.filter}>
          <Text style={{color: colorConfig.white}}>筛选</Text>
          <Icon size={16} name="filter"></Icon>
        </View>
      </View>
    </View>
  );
};

export default CheckHeader;
