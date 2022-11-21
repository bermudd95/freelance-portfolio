import React from 'react'
import '../Styles/Work.css'

const Work = () => {
  return (
    <div id='Work' className='bg-white text-black font-serif h-auto pt-5'>
        <h1 className='text-3xl flex justify-center underline'>
            Projects
        </h1>
        <div className='flex justify-center'>
            <div className='grid grid-cols-2 gap-32 pt-10 pb-10 m-4'>
                <div>
                    <span>
                        <a href='https://bermudd95.github.io/Movie-app/' className='hover:opacity-50 transition-500'>
                            <img className='w-96' src='https://repository-images.githubusercontent.com/545208464/32753419-8338-4ce9-848c-3e9ff240b05e' alt='' />
                        </a>
                    </span>
                    <h1 className='flex justify-center mt-5 text-lg'>
                        Movie.io
                    </h1>
                </div>
                <div>
                    <span>
                        <a href='https://bermudd95.github.io/Snake-app/' className='hover:opacity-50 transition-500'>
                            <img className='w-96'  src='https://repository-images.githubusercontent.com/548457414/d0643b77-24df-4f47-b5cb-1f067f0569a9' alt='' />
                        </a>
                    </span>
                    <h1 className='flex justify-center mt-5 text-lg'>
                        Snake game
                    </h1>
                </div>
                <div>
                    <span>
                        <a href='https://bermudd95.github.io/Youview-app/' className='hover:opacity-50 transition-500'>
                            <img className='w-96'  src='https://repository-images.githubusercontent.com/556975408/9289575e-42f9-4d24-bdc7-068e22df5ad0' alt='' />
                        </a>
                    </span>
                    <h1 className='flex justify-center mt-5 text-lg'>
                        YouView app
                    </h1>
                </div>
                <div>
                    <span>
                        <a href='https://bermudd95.github.io/Weather-App/' className='hover:opacity-50 transition-500'>
                            <img className='w-96'  src='https://repository-images.githubusercontent.com/548468894/85795baf-83b9-4690-a870-6b844b8771aa' alt='' />
                        </a>
                    </span>
                    <h1 className='flex justify-center mt-5 text-lg'>
                        Weather app
                    </h1>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Work