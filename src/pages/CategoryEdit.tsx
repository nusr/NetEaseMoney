import React from "react"
import {StyleSheet, View, Text} from "react-native"

const styles = StyleSheet.create({
    container: {

        backgroundColor: "#fff",

    },
})

export default function Report(props) {
    const {data = {title: 'test'}} = props
    return (
      <View style={styles.container}>
        <View>
          <Text>大类名称：{data.title}</Text>
        </View>
        <View>
          <View>
            <Text>小类名称</Text>
          </View>
          <View>
            <Text>input</Text>
          </View>
          <View><Text>icon</Text></View>
        </View>
        <View>
          <Text>select icon</Text>
        </View>
      </View>
    )
}




