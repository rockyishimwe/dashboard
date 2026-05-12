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
        <AccumulationChartComponent id='pyramid-chart' legendSettings={{background:'white'}} tooltip={{enable:true}} background={currentMode === 'Dark'? '#33373E' :'#fff'}>
          <Inject services={[AccumulationDataLabel,AccumulationTooltip,PyramidSeries,AccumulationLegend,AccumulationSelection]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective name='Food' xName='x' yName='y' dataSource={PyramidData} type='Pyramid' width='45%' height='80%' neckWidth='15%' gapRatio={0.03}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>

    </div>
  );
};

export default Pyramid;
