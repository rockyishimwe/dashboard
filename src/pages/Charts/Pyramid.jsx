import React from 'react';

import { AccumulationChartComponent,AccumulationSeriesCollectionDirective,AccumulationSeriesDirective,Inject,AccumulationLegend,AccumulationDataLabel,AccumulationTooltip,PyramidSeries,AccumulationSelection} from '@syncfusion/ej2-react-charts';
import {PyramidData} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';
const Pyramid = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pyramid" title="Food comparison Chart"/>
      <div className='w-full'>
        <AccumulationChartComponent id='pyramid-chart' legendSettings={{background:'white'}}>

        </AccumulationChartComponent>
      </div>

    </div>
  );
};

export default Pyramid;
