import React from 'react'
import ChartLayout from '../../components/ChartLayout'
import { Text } from 'react-native'
export default function CheckBarChart() {


    const fill = 'rgb(134, 65, 244)'
    const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

    return (
      <ChartLayout>
        <Text>bar</Text>
      </ChartLayout>

    )

}
