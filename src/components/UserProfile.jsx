import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import {Button} from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
const UserProfile = () =>{
  const {currentColor} = useStateContext();
  return (
    <div  className='nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg dark:text-gray-200'>User Profile</p>
          <Button icon={<MdOutlineCancel/>}
          color="rgb(153,171,180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          />
      </div>
    </div>
  )
};
export default UserProfile;