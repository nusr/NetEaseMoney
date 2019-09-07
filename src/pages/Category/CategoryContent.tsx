import React from "react";
import {
    StyleSheet,
    View,
    Text,

} from "react-native";
import colorConfig from '../../shared/color'
import Button from '../../components/Button'

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
        backgroundColor: colorConfig.white
    },
    gap: {
        height: 10,
        backgroundColor: '#f6f6f6'
    },

    button: {
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
const titleStyle = StyleSheet.create({
    container: {
        ...colorConfig.flexBetween,
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: colorConfig.borderColor,
        borderBottomColor: colorConfig.borderColor,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colorConfig.primaryColor
    }
})


function TitleItem(props) {
    const {data = {}} = props
    return (
      <View style={titleStyle.container}>
        <View style={titleStyle.content}>
          <View style={{paddingRight: 20}}><Text>arrow️</Text></View>
          <View style={titleStyle.icon}><Text>icon</Text></View>
          <View style={{paddingLeft: 20}}>
            <View><Text>{data.title}</Text></View>
            <View><Text>{data.subTitle}</Text></View>
          </View>
        </View>
        <View>
          <Text>...</Text>
        </View>
      </View>
    )
}

const childStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: colorConfig.f8
    },
    item: {
        padding: 25,
        textAlign: 'center'
    },
    empty: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
    }
})

function EmptyItem(props) {
    const {navigation} = props

    function handleCategory() {
        navigation.navigate('CategoryEdit')
    }

    return (
      <Button style={childStyle.item} onPress={handleCategory}>
        <View style={childStyle.empty}><Text>+</Text></View>
        <View style={{paddingTop: 10, color: '#999'}}><Text>添加子类</Text></View>
      </Button>)
}


function ChildItem(props) {
    const {data = {}, navigation} = props

    function handleCategory() {
        navigation.navigate('CategoryEdit')
    }

    return (
      <Button style={childStyle.item} onPress={handleCategory}>
        <View style={titleStyle.icon}><Text>{data.icon}</Text></View>
        <View style={{paddingTop: 10}}><Text>{data.title}</Text></View>
      </Button>
    )
}

function ChildList(props) {
    const {data = [], navigation} = props
    return (
      <View style={childStyle.container}>
        {data.map(item => (<ChildItem data={item} navigation={navigation} key={item.id} />))}
        <EmptyItem navigation={navigation} />
      </View>
    )
}

function CategoryContent(props) {
    const {navigation} = props
    const list = [
        {
            icon: 'test',
            title: '餐饮',
            id: 1,
            children: [
                {
                    icon: 'test',
                    title: '餐饮',
                    id: 3
                }, {
                    icon: 'test',
                    title: '投资',
                    id: 4
                }
            ]
        }, {
            icon: 'test',
            title: '投资',
            subTitle: '系统分类，可关联投资账户',
            id: 2
        }
    ]
    return (
      <View style={styles.container}>
        {list.map(item => (
          <View key={item.id}>
            <TitleItem data={item} />
            <ChildList data={item.children} navigation={navigation} />
          </View>
            ))}
      </View>
    );

}


export default CategoryContent
