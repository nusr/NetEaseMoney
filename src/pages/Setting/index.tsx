import React from 'react';
import {FlatList, StyleSheet, View, Text, ScrollView} from 'react-native';
import colorConfig from '../../shared/color'
import {recordSetting, appSetting} from './data'
import Button from '../../components/Button'

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        marginLeft: 20,
        marginRight: 20
    },
    listTitle: {
        color: colorConfig.title,
        fontSize: 16
    },
    titleWrapper: {
        backgroundColor: colorConfig.f8,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
    },
    gap: {
        backgroundColor: colorConfig.f8,
        height: 10
    }
})

function MoreItem(props) {
    console.log(props)
    const {data = {}, navigation} = props
    const {title, subTitle, showArrow = true} = data

    function handleClick() {
        const {path} = data
        if (path) {
            navigation.navigate(path)
        }
    }

    return (
      <Button style={styles.itemWrapper} onPress={handleClick}>
        <View style={styles.item}>
          <View>
            <Text style={{color: colorConfig.title, fontSize: 16}}>{title}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={{paddingRight: 10}}>
            <Text style={{color: '#999', fontSize: 16}}>
              {subTitle}
            </Text>
          </View>
          {showArrow && (
            <View>
              <Text style={{
                fontSize:16,
                color:'#d0d0d0'
              }}>
                >
              </Text>
            </View>)}

        </View>
      </Button>
    )
}


function Setting(props) {
    console.log(props)
    const {navigation} = props
    return (
      <View style={styles.container}>
        <ScrollView
          style={{flex: 1}}
          automaticallyAdjustContentInsets={false}
          horizontal={false}
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.listTitle}>
                        记账设置
            </Text>
          </View>
          <FlatList
            data={recordSetting}
            keyExtractor={(item, index) => `record${index}`}
            renderItem={({item}) => (<MoreItem data={item} navigation={navigation} />)}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.listTitle}>
                        应用设置
            </Text>
          </View>
          <FlatList
            data={appSetting}
            keyExtractor={(item, index) => `app${index}`}
            renderItem={({item}) => (<MoreItem navigation={navigation} data={item} />)}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.listTitle}>
                        帮助
            </Text>
          </View>
          <MoreItem navigation={navigation} data={{title: '问题反馈', subTitle: '您的反馈使我们变得更好'}} />
          <MoreItem data={{title: '清除缓存', subTitle: '1.42MB', showArrow: false}} />
          <View style={styles.gap} />
          <MoreItem navigation={navigation} data={{title: '关于'}} />
          <MoreItem navigation={navigation} data={{title: '检查更新'}} />
        </ScrollView>

      </View>
    );

}

export default Setting