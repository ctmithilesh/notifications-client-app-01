import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './index.css'
const SendMail = () => {

    const [to,setTo] = useState()
    const [subject,setSubject] = useState()
    const [message,setMessage] = useState()
    const [loading,setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()


    const handleInputChange = (e)=>{
        const target = e.target 
        const name = target.name
        if(name === 'to'){
            setTo(target.value)
        }
        if(name === 'subject'){
            setSubject(target.value)
        }
        if(name === 'message'){
            setMessage(target.value)
        }

    }
    const submitForm = ()=>{
        setLoading(true)
        console.log(to,subject,message)
        try{

        }
        catch(e){
            console.log(e)
        }
    }

    const button = loading ?  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Processing...
  </button> : <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Send
  </button> 

  return (
    <div className="flex justify-center items-center h-screen __app_background">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Send Email</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To:</label>
            <input
              type="text"
              name="to"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Recipient's email"
              onChangeCapture={handleInputChange}
              {...register('to',{required:true})}
            />
            {errors.to && <p className="text-red-500 text-xl">Email is required</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email subject"
              onChangeCapture={handleInputChange}
              {...register('subject',{required: true})}
            />
             {errors.subject && <p className="text-red-500 text-xl">Subject is required</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
              onChangeCapture={handleInputChange}
              {...register('message',{required:true})}
            ></textarea>
             {errors.message && <p className="text-red-500 text-xl">Message is required</p>}
          </div>
          <div className="flex justify-center">
            {button}
          </div>
        </form>
      </div>
    </div>
  );
};
export default SendMail;