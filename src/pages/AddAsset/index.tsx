import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
type Props = {}
const AddAsset: React.FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>AddAsset</Text>
    </View>
  );
}

AddAsset.navigationOptions = () => ({
  headerBackImage: () => (<Text style={{fontSize: 40}}>x</Text>),
  title: '添加资产',
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0
  },
});
export default AddAsset;
