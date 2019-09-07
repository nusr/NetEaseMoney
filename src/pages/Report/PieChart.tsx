import React from 'react'
import { Text } from 'react-native'
import ChartLayout from '../../components/ChartLayout'

export default function PieChartReport() {

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const randomColor = () => (`#${(Math.random() * 0xFFFFFF << 0).toString(16)}000000`).slice(0, 7);// eslint-disable-line

    return (
      <ChartLayout>
        <Text>pie</Text>
      </ChartLayout>

    )


}
