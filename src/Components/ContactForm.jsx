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
    <div className='m-5'>
        <div>
            <h1 className='flex justify-center underline text-3xl py-10'>
                Contact Me!
            </h1>
        </div>
        <form className='w-auto border-solid border-2 border-black flex flex-col' id='Contact' ref={form} onSubmit={sendEmail}>
            <div className='mt-5 mx-5'>
                <p>
                    Please fill out this form! 
                </p>
                <p className='opacity-50 text-red-200 my-10'>
                    This information will be kept confidential, none of the provided information will be shared with other parties.
                </p>
            </div>
            <div className='flex flex-row m-5'>
                <label>
                    Name:
                </label>
                <input className='ml-3 w-52' type="text" name="user_name" />
            </div>
            <div className='m-5'>
                <label >
                    Email:
                </label>
                <input className='mx-5 w-52' type="email" name="user_email" />
            </div>
            <label className='mx-5'>
                    Message:
            </label>
            <textarea className='m-5 w-96 h-32'  />
            <input name="message" className='w-32 mr-5 place-self-end mb-10 border-solid border-2 bg-blue-500 cursor-pointer hover:bg-cyan-500 duration-500' type="submit" value="Send" />
        </form>
    </div>
  );
};

export default ContactForm