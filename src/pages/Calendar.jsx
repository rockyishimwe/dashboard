import React, { useState } from 'react';
import {ScheduleComponent,ViewsDirective,ViewDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule';
import {scheduleData} from '../data/dummy';
import {Header} from '../components';

//eslint-disable-next-line react/destructuring-assignment

const PropertyPane = (props) => <div className='mt-5'>{props.children}</div>;

const Scheduler = () =>{
  const [scheduleObj,setScheduleObj] = useState();
  const change = (args) =>{
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };
  const onDragStart = (arg)=>{
    arg.navigation.enable = true;
  };
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>

    </div>
  )
}

export default Scheduler;
