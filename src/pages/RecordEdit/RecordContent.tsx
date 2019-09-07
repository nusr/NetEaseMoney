import React from "react";
import {
  StyleSheet,
  View,
  Text,

} from "react-native";
import HeaderMoney from './HeaderMoney'
import CategoryList from './CategoryList'
import Remark from './Remark'
import Button from '../../components/Button'
import colorConfig from '../../shared/color'

const buttonCommon = {
  borderColor: colorConfig.primaryColor,
  borderWidth: 3,
  flex: 1,
  paddingTop: 20,
  paddingBottom: 20,
  fontSize: colorConfig.baseFontSize
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConfig.white,
    position: 'relative'
  },
  gap: {
    height: 10,
    backgroundColor: '#f6f6f6'
  },

  button: {
    position: 'absolute',
    bottom: 0,
    padding: 22,
    ...colorConfig.flexBetween
  },
  buttonLeft: {
    ...buttonCommon,
    marginRight: 14,

  },
  buttonRight: {
    ...buttonCommon,
    backgroundColor: colorConfig.primaryColor
  }
});


function RecordContent() {

  function handleDelete() {
    console.log('delete')
  }

  function handleSave() {
    console.log('save')
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <HeaderMoney />
        <View style={styles.gap} />
        <CategoryList />
        <Remark />
      </View>
      <View style={styles.button}>
        <Button onPress={handleDelete} style={styles.buttonLeft}>
          <Text
            style={{textAlign: 'center', color: colorConfig.primaryColor}}
          >删除
          </Text>
        </Button>
        <Button style={styles.buttonRight} onPress={handleSave}>
          <Text
            style={{textAlign: 'center', color: colorConfig.white}}
          >保存
          </Text>
        </Button>
      </View>
    </View>
  );

}


export default RecordContent
