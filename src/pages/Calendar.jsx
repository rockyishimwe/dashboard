import React, { useState } from 'react';
import {ScheduleComponent,ViewsDirective,ViewDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule';
import {sheduleData} from '../data/dummy';
import {Header} from '../components';

//eslint-disable-next-line react/destructuring-assignment

const PropertyPane = (props) => <div className='mt-5'>{props.children}</div>;

const Scheduler = () =>{
  const [scheduleObj,setScheduleObj] = useState();
}

export default Scheduler;
