import React from 'react'
import '../Styles/About.css'

const About = () => {
  return (
    <>
        <div id='About' className='text-white h-screen'>
            <div className='absolute h-auto'>
                <h1 className='flex underline font-serif justify-center text-3xl my-3'>
                    Get to know me!
                </h1>
                <p className='mx-5 pt-10 font-sans leading-loose'>
                    Hi! My name is Danny Bermudez. I would like to start by saying thank you for visiting my website and choosing me in your next project. In today's day and age, there is a sea of developers that assist people in making websites. I would like to tell you why I stand out from the rest. While I am knowledgeable in HTML, CSS (Tailwind, Bootstrap), Javascript, ReactJS, and have 8 years experience under my belt, I focus on the person that I am there to help. To do that, I get to know a bit about the person as well as listen to their idea in order to get a better understanding as to what they are trying to present. I also check in with them at least 2-3 times during my construction of their project, by sending them progress shots. I believe in putting the client as well as their ideas/opinions first as opposed to pushing out websites left and right. Once again, I would like to thank you for visiting my website, feel free to have a look at my projects below and if you would like to share your ideas and discuss how I could help, please visit the Contact form below or you could click <span><a href='#Contact' className='hover:text-orange-400 duration-500'>here</a></span>.
                </p>
            </div>
        </div>
    </>
  )
}

export default About