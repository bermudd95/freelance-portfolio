import React from 'react'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import '../Styles/Navigation.css';

const Navigation = () => {
  return (
    <>
        <nav className='bg-blue-300 h-auto pb-5 shadow md:flex md:justify-between md:items-center'>
            <div className='md:flex md:justify-between md:items-center'>
                <span className='text-2xl font-[Poppins] flex justify-center'>
                    DB Productions
                    <DeveloperBoardIcon className='ml-2 mb-1' color='secondary' fontSize='large'/>
                </span>
                <ul className='flex flex-row justify-center transition-all ease-in duration-500'>
                    <li className='mx-2 md:mx-4 my-3 md:my-6 md:my-0'>
                        <a href='#About' className='text-xl hover:text-orange-400 duration-500'>
                            About
                        </a>
                    </li>
                    <li className='mx-2 md:mx-4 my-3 md:my-6 md:my-0'>
                        <a href='#Work' className='text-xl hover:text-orange-400 duration-500'>
                            Projects
                        </a>
                    </li>
                    <li className='mx-2 md:mx-4 my-3 md:my-6 md:my-0'>
                        <a href='#Package' className='text-xl hover:text-orange-400 duration-500'>
                            Packages
                        </a>
                    </li>
                    <button className='bg-gray-500 text-white rounded font-[Poppins] duration-500 px-4 hover:bg-white hover:text-black'>
                        <a href='#Contact'>
                            Contact Me
                        </a>    
                    </button>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navigation