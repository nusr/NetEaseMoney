import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import colorConfig from '../../shared/color';
import Button from '../../components/Button';

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
});

export default function Report() {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [desc, setDesc] = useState('');

  function handleInput(value) {
    console.log(value);
    setDesc(value);
  }

  function handleCancel() {
    setPickerVisible(false);
  }

  function handleDate() {
    setPickerVisible(true);
  }

  function handleConfirm(value) {
    console.log(value);
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
            <Text>calendar</Text>
            <Text
              style={{paddingLeft: 10, fontSize: 16, color: colorConfig.title}}>
              4月4日
            </Text>
          </Button>
        </View>
        <View style={styles.remark}>
          <TextInput
            value={desc}
            style={{color: colorConfig.title, fontSize: 16}}
            placeholder="请输入备注信息(最多140个字)"
            onChangeText={handleInput}
          />
        </View>
        {/* <DateTimePicker
          isVisible={pickerVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        /> */}
      </View>
      <View style={{paddingTop: 30}}>
        <View style={styles.flex}>
          <View style={{paddingRight: 10}}>
            <Text>icon</Text>
          </View>
          <View>
            <Text style={{color: colorConfig.subTitle, fontSize: 16}}>
              可报销
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
