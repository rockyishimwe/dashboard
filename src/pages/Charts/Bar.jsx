import React from 'react';
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,Tooltip,ColumnSeries,DataLabel } from '@syncfusion/ej2-react-charts';
import { barCustomSeries,barPrimaryXAxis,barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h1>Bar Chart</h1>
    </div>
  );
};

export default Bar;
