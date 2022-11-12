import React from 'react'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const Navigation = () => {
  return (
    <>
        <nav className='p-5 bg-blue-300 shadow md:flex md:justify-between md:items-center'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-[Poppins]'>
                    DB Productions
                    <DeveloperBoardIcon className='ml-2 mb-1' color='secondary' fontSize='large'/>
                </span>
            </div>
            <ul className='md:flex md:items-center md:static bg-blue-300 w-full left-0 md:w-auto py-4 md:py-0 md:pl-0 pl-7 transition-all ease-in duration-500'>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#About' className='text-xl hover:text-orange-400 duration-500'>
                        About
                    </a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#Work' className='text-xl hover:text-orange-400 duration-500'>
                        Projects
                    </a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a href='#Package' className='text-xl hover:text-orange-400 duration-500'>
                        Packages
                    </a>
                </li>
                <button className='bg-gray-500 text-white rounded font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-white hover:text-black'>
                    <a href='#Contact'>
                        Contact Me
                    </a>    
                </button>
            </ul>
            
        </nav>
    </>
  )
}

export default Navigation