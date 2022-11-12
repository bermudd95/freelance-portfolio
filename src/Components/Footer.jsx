import React from 'react'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const Footer = () => {
  return (
    <div className='bg-black text-white'>
        <div className='flex flex-row justify-between'>
            <p className='ml-5'>
                All rights reserved
            </p>
            <h1>
                DB Productions
                <DeveloperBoardIcon  className='ml-1'/>
            </h1>
            <p className='mr-5'>
                Copyright 2022
            </p>
        </div>  
    </div>
  )
}

export default Footer