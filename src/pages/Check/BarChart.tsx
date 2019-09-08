import React from 'react';
import ChartLayout from '../../components/ChartLayout';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];
type Props = {};
const CheckBarChart: React.FunctionComponent<Props> = () => {
  return (
    <ChartLayout>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </ChartLayout>
  );
};

export default CheckBarChart;
