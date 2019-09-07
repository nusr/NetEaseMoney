import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import colorConfig from '../../constants/color'
import TipList from './TipList'
import MoreList from './MoreList'
import Button from '../../components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topHeader: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  infoWrapper: {
    paddingTop: 10,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
    
  },
  nickWrapper: {
    paddingLeft: 20
  },
  settingWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  gap: {
    height: 10,
    backgroundColor: colorConfig.f8
  },
  moreWrapper: {
    flex: 1
  }
});
type Props = {
  navigation: any;
}

/* TODO: bells 图标要换 */
const User: React.FunctionComponent<Props> = ({
  navigation
}) => {
  function handleNavigate() {
    navigation.navigate('Setting')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.settingWrapper}>
          <View style={{paddingRight: 26}}>
            <Text style={{fontSize: 26, color: '#4e5260'}}>bells</Text>
          </View>
          <Button onPress={handleNavigate}>
            <Text style={{fontSize: 26, color: '#4e5260'}}>setting</Text>
          </Button>
        </View>
        <View style={styles.infoWrapper}>
          <View>
            <Text>avatar</Text>
          </View>
          <View style={styles.nickWrapper}>
            <View>
              <Text style={{color: colorConfig.title, fontSize: colorConfig.baseFontSize}}>nick</Text>
            </View>
            <View>
              <Text style={{color: colorConfig.subTitle, fontSize: 16}}>查看并编辑个人资料</Text>
            </View>
          </View>
        </View>
        <View>
          <TipList/>
        </View>
      </View>
      <View style={styles.gap}/>
      <View style={styles.moreWrapper}>
        <MoreList/>
      </View>
    </View>
  );
}

export default User;
