import React from 'react';
import {ChatComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Logarithmic,Zoom,Crosshair,Tooltip,HiloSeries} from '@syncfusion/ej2-react-charts';
import { financialChartData,FinancialPrimaryXAxis,FinancialPrimaryYAxis } from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';


function filterValue(value){
  if(value.x>=date1){
    return value.x ,value.high,value.low;
  }
}
const date1 = new Date('2026,06,05');
const Financial = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h1>Financial Chart</h1>
    </div>
  );
};

export default Financial;
