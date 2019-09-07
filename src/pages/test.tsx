import React from "react"
import {StyleSheet, View, Text, TouchableOpacity} from "react-native"
// import fs from 'react-native-fs'

const styles = StyleSheet.create({
    container: {

        backgroundColor: "#fff",

    },
})

export default function Report() {
    function download() {
        const path = `${fs.DocumentDirectoryPath  }/test.txt`;
        // fs.writeFile(path, 'react-native-fs test', 'utf8')
        //     .then(() => {
        //         console.log('FILE WRITTEN!');
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={download}>
          <Text>test</Text>
        </TouchableOpacity>
      </View>
    )
}




