import React from 'react'
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className='bg-black text-white pb-2'>
        <div className='flex flex-row justify-between'>
            <p className='ml-5'>
                All rights reserved
            </p>
            <p className='mr-5'>
                Copyright 2022
            </p>
        </div>  
    </div>
  )
}

export default Footer