import React from 'react';
import {AccumulationChartComponent,AccumulationSeriesCollectionDirective,AccumulationSeriesDirective,PieSeries,AccumulationDataLabel,Inject,AccumulationTooltip, AccumulationLegend} from '@syncfusion/ej2-react-charts';
import {useStateContext} from '../../contexts/ContextProvider';

const Doughnut = ({id,data,legendVisibility,height}) =>{
  const {currentMode} = useStateContext();

  return(
    <AccumulationChartComponent id={id} legendSettings={{visible:legendVisibility,background:'white'}} height={height} background={currentMode === 'Dark'? '#33373E':'#fff'} tooltip={{enable:true}}>
      <Inject services={[AccumulationLegend,PieSeries,AccumulationDataLabel,AccumulationTooltip]}/>
    </AccumulationChartComponent>
  )
}
export default Doughnut;