import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import colorConfig from '../../constants/color';
import {useModel, STORE_NAMESPACE} from '../../store';
import {DEFAULT_MONEY} from '../../constants';
const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
type Props = {};
// TODO: 自己实现键盘布局
// TODO: 金额校验

const Report: React.FunctionComponent<Props> = () => {
  const {setMoney, money, prefix} = useModel(STORE_NAMESPACE.Record);
  let result: string = money;
  if (!result.includes(prefix)) {
    result = prefix + result;
  }
  function handleFocus() {
    if (money === DEFAULT_MONEY) {
      setMoney('');
    }
  }
  return (
    <View style={styles.container}>
      <View style={colorConfig.flexBetween}>
        <View>
          <Text
            style={{
              color: colorConfig.title,
              fontSize: colorConfig.baseFontSize,
            }}>
            账单金额
          </Text>
        </View>
        <View>
          <TextInput
            onChangeText={setMoney}
            value={result}
            onFocus={handleFocus}
            keyboardType="number-pad"
            style={{fontSize: 30, color: colorConfig.deepGreen}}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Report;
