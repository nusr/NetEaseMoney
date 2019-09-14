import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import colorConfig from '../../constants/color';
import Button from '../../components/Button';
import Icon from '../../iconfont/Icon';
import {useModel, STORE_NAMESPACE} from '../../store';
import {timeFormat} from '../../utils';
const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  date: {
    borderBottomWidth: 1,
    borderBottomColor: colorConfig.borderColor,
  },
  remark: {
    flex: 1,
    marginLeft: 13,
    borderBottomWidth: 1,
    borderBottomColor: colorConfig.borderColor,
  },
  dateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
  },
  button: {
    paddingRight: 10,
  },
});
type Props = {};
const Report: React.FunctionComponent<Props> = () => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const {
    setTime,
    time,
    setDescription,
    description,
    apply,
    setApply,
  } = useModel(STORE_NAMESPACE.Record);
  const {toggleFocus} = useModel(STORE_NAMESPACE.Page);
  function handleCancel() {
    setPickerVisible(false);
  }

  function handleDate() {
    setPickerVisible(true);
  }

  function handleConfirm(value: Date) {
    setTime(value.getTime());
    handleCancel();
  }

  return (
    <View
      style={{
        paddingLeft: colorConfig.baseFontSize,
        paddingRight: colorConfig.baseFontSize,
      }}>
      <View style={styles.flex}>
        <View style={styles.date}>
          <Button onPress={handleDate} style={styles.dateWrapper}>
            <Icon name="calendar" />
            <Text
              style={{paddingLeft: 10, fontSize: 16, color: colorConfig.title}}>
              {timeFormat(time)}
            </Text>
          </Button>
        </View>
        <DateTimePicker
          date={time}
          isVisible={pickerVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
        <View style={styles.remark}>
          <TextInput
            onBlur={toggleFocus}
            onFocus={toggleFocus}
            value={description}
            style={{color: colorConfig.title, fontSize: 16}}
            placeholder="请输入备注信息(最多140个字)"
            onChangeText={setDescription}
          />
        </View>
      </View>
      <View style={{paddingTop: 30}}>
        <Button style={[styles.flex, styles.button]} onPress={setApply}>
          <Icon name={apply ? 'ok' : 'ok-out'} color={colorConfig.tabColor} />
          <View
            style={{
              paddingLeft: 10,
            }}>
            <Text style={{color: colorConfig.subTitle, fontSize: 16}}>
              可报销
            </Text>
          </View>
        </Button>
      </View>
    </View>
  );
};
export default Report;
