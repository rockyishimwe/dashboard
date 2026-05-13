import React from 'react';
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,SplineAreaSeries,Legend } from '@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../../components';
import { areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const {currenMode} = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h1>Area Chart</h1>
    </div>
  );
};

export default Area;
