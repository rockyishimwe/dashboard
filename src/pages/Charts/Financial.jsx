import React from 'react';
import {ChatComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Logarithmic,Zoom,Crosshair,Tooltip,HiloSeries, ChartComponent} from '@syncfusion/ej2-react-charts';
import { financialChartData,FinancialPrimaryXAxis,FinancialPrimaryYAxis } from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';


const date1 = new Date('2026,06,05');
function filterValue(value){
  if(value.x>=date1){
    return value.x, value.high,value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);
const Financial = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-190 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Financial" title="AAPLE Historical"/>
      <div className='w-full'>
        <ChartComponent id='charts' primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis}>

        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
