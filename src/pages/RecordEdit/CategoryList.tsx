import React, {useState} from "react"
import {StyleSheet, View, Text} from "react-native"
import colorConfig from '../../shared/color'
import Button from '../../components/Button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConfig.white
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#999",
    marginTop: 20,
    marginBottom: 12,
  },
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  dot: {},
  dotWrapper: {
    width: 6,
    height: 6,
    backgroundColor: '#b6b8bd',
    borderRadius: 3,
    margin: 6
  },
  item: {},
  content: {}

})

function CategoryItem(props) {
  const {data = {}} = props
  return (
    <View style={styles.item}>
      <View style={styles.icon}><Text>{data.icon}</Text></View>
      <View><Text style={{fontSize: 16, color: colorConfig.title}}>{data.title}</Text></View>
    </View>
  )
}

function getMockData() {
  const data = []
  for (let i = 0; i < 22; i += 1) {
    data.push({
      icon: `icon${i}`,
      title: `title${i}`,
      id: i
    })
  }
  return data;
}

const pageSize = 8;
export default function CategoryList() {
  const [page, setPage] = useState(0)
  const data = getMockData()
  const totalPage = Math.ceil(data.length / pageSize)
  const pages = []
  for (let i = 0; i < totalPage; i += 1) {
    pages.push(i)
  }
  console.log(pages)
  const list = data.slice(page * pageSize, (page + 1) * pageSize);
  const top = list.slice(0, 4)
  const bottom = list.slice(4) || []

  function handlePageChange(i) {
    setPage(i)
  }

  function activeColor(i) {
    if (i === page) {
      return {
        ...styles.dotWrapper,
        backgroundColor: '#494d5b'
      }
    }
    return styles.dotWrapper

  }

  return (
    <View style={styles.container}>
      <View
        style={styles.content}
      >
        <View style={styles.wrapper}>
          {top.map(item => (<CategoryItem key={item.id} data={item} />))}
        </View>
        <View style={styles.wrapper}>
          {bottom.map(item => (<CategoryItem key={item.id} data={item} />))}
        </View>
      </View>
      <View style={styles.page}>
        {pages.map((item) => (
          <Button style={activeColor(item)} onPress={() => handlePageChange(item)} key={item}>
            <Text />
          </Button>))}
      </View>
    </View>
  )
}




