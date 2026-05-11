import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import {BsCheck} from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {themeColors} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const {setColor,SetMode,currentColor,currentMode,setThemeSettings} = useStateContext();
  return(
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>Settings</p>
          <button type='button' onClick={()=> setThemeSettings(false)} style={{color:'rgb(153,171,180)',borderRadius:'50%'}} className='text-2xl hover:drop-shadow-xl hover:bg-light-gray p-3'>
            <MdOutlineCancel/>
          </button>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-xl'>Theme Option</p>
          <div className='mt-4'>
            <input type="radio" id='light' name='theme' value="Light" className='cursor-pointer' onChange={SetMode} checked={currentMode === 'Light'} />
            <label htmlFor="light" className='ml-2 text-md cursor-pointer'>Light</label>
          </div>
          <div className='mt-2'>
            <input type="radio" id='dark' name='theme' value="Dark" onChange={SetMode} className='cursor-pointer' checked={currentMode=== "Dark"} />
            {/* <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>Dark</label> */}
            <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>Dark</label>
          </div>
        </div>
        <div className='p-4 border-t-1 border-color ml-4'>
          <p className='font-semibold text-xl'>Theme Colors</p>
          <div className='flex gap-3'>

          </div>
        </div>
      </div>
    </div>
  )
};

export default ThemeSettings;
