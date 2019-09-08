import React from 'react';
import ChartLayout from '../../components/ChartLayout';
import {VictoryPie} from 'victory-native';
type Props = {};
const PieChartReport: React.FunctionComponent<Props> = () => {
  return (
    <ChartLayout>
      <VictoryPie
        data={[{x: 'Cats', y: 35}, {x: 'Dogs', y: 40}, {x: 'Birds', y: 55}]}
      />
    </ChartLayout>
  );
};
export default PieChartReport;
