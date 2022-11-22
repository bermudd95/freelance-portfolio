import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u2f5wlu', 'template_oq0mgol', form.current, 'dkSCkT9G1nrflBiqD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='bg-gray-300 pb-5'>
        <div>
            <h1 className='flex justify-center underline text-3xl py-10'>
                Contact Me!
            </h1>
        </div>
        <form className='m-5 w-auto border-solid border-2 border-black flex flex-col' id='Contact' ref={form} onSubmit={sendEmail}>
            <div className='mt-5 mx-5'>
                <p>
                    Please fill out this form! 
                </p>
                <p className='text-red-400 my-10'>
                    This information will be kept confidential, none of the provided information will be shared with other parties.
                </p>
            </div>
            <div className='m-5'>
                <label>
                    Name:
                </label>
                <input placeholder='Full Name' className='ml-3 w-52 md:w-60' type="text" id="user_name" name="user_name" />
            </div>
            <div className='m-5'>
                <label >
                    Email:
                </label>
                <input placeholder='Valid Email' className='mx-5 w-52 md:w-60' type="email" id='user_email' name="user_email" />
            </div>
            <div className='m-5'>
                <label>
                    Phone Number:
                </label>
                <input placeholder='Phone Number' className='mx-5 w-52 md:w-60' type='phone' id='user_number' name="user_number" />
            </div>
            <label className='mx-5'>
                    Message:
            </label>
            
            <textarea className='m-5 w-62 md:w-96 h-32' name="message"  id='message' />
            <input className='w-32 mr-5 place-self-end mb-10 border-solid border-2 bg-blue-500 cursor-pointer hover:bg-cyan-500 duration-500' type="submit" value="Send" />
        </form>
    </div>
  );
};

export default ContactForm