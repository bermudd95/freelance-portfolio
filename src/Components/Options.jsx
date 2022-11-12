import React from 'react'

const Options = () => {
  return (
    <div id='Package' className='h-screen bg-gray-400'>
        <h1 className='flex justify-center underline text-3xl pt-5'>
            Price Packages
        </h1>
        <div className='grid grid-cols-3 gap-10 mx-10 mt-20'>
            <div className='bg-white hover:bg-orange-300 hover:opacity-50 cursor-pointer'>
                <span>
                    <a href='#Contact'>
                        <div>
                            <h1 className='flex justify-center underline text-2xl mt-5 font-bold'>
                                Basic
                            </h1>
                            <ul className='flex flex-col justify-center items-center my-5 mt-16 gap-10 list-decimal'>
                                <li>
                                    <p>
                                        3-5 pages
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        2-3 days
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        No additional extras:
                                    </p>
                                </li>
                            </ul>    
                            <p className='text-2xl text-green-700 font-bold flex justify-center mt-28'>
                                $99
                            </p>
                        </div>
                    </a>
                </span>
            </div>
            <div className='bg-white hover:bg-orange-300 hover:opacity-50 cursor-pointer'>
                <span>
                    <a href='#Contact'>
                        <div>
                            <h1 className='flex justify-center underline text-2xl mt-5 font-bold'>
                                Best
                            </h1>
                            <ul className='flex flex-col justify-center items-center my-5 gap-3 list-decimal'>
                                <li>
                                    <p>
                                        5-8 pages
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        3-4 days
                                    </p>
                                </li>
                                <li className='ml-28'>
                                    <p>
                                        Extras:
                                    </p>
                                    <ul className='list-disc mt-5 ml-5'>
                                        <li>
                                            <p className='my-2'>
                                                Email/Info request forms
                                            </p>
                                        </li>
                                        <li>
                                            <p className='my-2'>
                                                Appointment setting
                                            </p>
                                        </li>
                                        <li>
                                            Etc.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p className='text-2xl text-green-700 font-bold flex justify-center mt-28'>
                                $350
                            </p>
                        </div>
                    </a>
                </span>
            </div>
            <div className='bg-white hover:bg-orange-300 hover:opacity-50 cursor-pointer'>
                <span>
                    <a href='#Contact'>
                        <div>
                            <h1 className='flex justify-center underline text-2xl mt-5 font-bold'>
                                Premium
                            </h1>
                            <ul className='flex flex-col justify-center items-center my-5 gap-3 list-decimal'>
                                <li>
                                    <p>
                                        10-12 pages
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        5-7 days
                                    </p>
                                </li>
                                <li className='flex justify-center'>
                                    All that was included in Best package plus:
                                </li>
                                <ul className='list-disc mx-32'>
                                    <li>
                                        <p className='flex justify-center my-2'>
                                            Consistant maintenance of site
                                        </p>
                                    </li>
                                    <ul className='list-disc mx-14'>
                                        <li>
                                            <p>
                                                Pricing is monthly based and dependant on project
                                            </p>
                                        </li>
                                    </ul>
                                </ul>
                            </ul>
                            <p className='text-2xl text-green-700 font-bold flex justify-center mb-2'>
                                $400
                            </p>
                            
                        </div>
                    </a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Options