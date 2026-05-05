import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import { IoIosAdd } from 'react-icons/io';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';

import {Stacked,Pie,Button,LineChart,SparkLine} from '../components';
import {earningData,medicalproBranding,recentTransactions,weeklyStats,dropdownData,SparklineAreaData,ecomPieChartData} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({currentMode}) =>(
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    <DropDownListComponent id='time' fields={{text:'Time',value:"Id"}} style={{border:'none',color:(currentMode==='Dark')&& 'white'}} value="1" dataSource={dropdownData} popupHeight="120px"/>
  </div>
);
const Ecommerce = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
            <button type='button' style={{backgroundColor:'currentColor'}} className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4'>

            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Ecommerce;
