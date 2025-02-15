'use client'

import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast' 
import { Resend } from 'resend'

const Form = () => {
  const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
          toast.loading("Sending Message...")

          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if(response.status !== 200) {
            throw new Error('Failed to send message')
          }
          
          toast.dismiss();
          toast.success("Message Sent Successfully")

          setTimeout(() => {
            toast.dismiss();
          }, 3000);
        } catch (error) {
          console.error(error);
          toast.dismiss();
          toast.error("Failed to send message")
          setTimeout(() => {
            toast.dismiss();
          }, 3000);
        }
      };

    return (
        <div
        id="contact"
        className="hero h-fit p-2 py-8 md:py-16 mt-2 flex flex-col justify-center items-center gap-4"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(76, 101, 240, 0.2)), url(/images/globe.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

        <Toaster />

        <div className='max-w-[1200px] mx-auto max-md:flex-col flex gap-8 backdrop-blur-sm p-8 md:p-16 rounded-3xl shadow-[0px_0px_20px_10px_rgba(76,101,240,0.2)] '>

          <div className=''>
            <h1 className='text-white font-bold text-4xl max-md:text-center md:text-6xl'>Contact Us</h1>
            <p className='text-white mt-4 max-w-[600px]'>Ready for professional vehicle disposal? Get in touch for a free valuation. We handle all paperwork and provide compliant, eco-friendly solutions.</p>
          </div>
          
          <form className="flex flex-col gap-4 items-center mx-auto max-w-[400px] w-full text-white font-semibold" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 border-2 bg-transparent border-white rounded-md w-full focus:outline-none placeholder:text-white/70"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 border-2 bg-transparent border-white rounded-md w-full focus:outline-none placeholder:text-white/70"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              className="p-2 border-2 bg-transparent border-white rounded-md w-full focus:outline-none placeholder:text-white/70"
              required
            />
            <input
              type="text"
              name="model"
              placeholder="Your Vehicle Model"
              className="p-2 border-2 bg-transparent border-white rounded-md w-full focus:outline-none placeholder:text-white/70"
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Vehicle Number"
              className="p-2 border-2 bg-transparent border-white rounded-md w-full focus:outline-none placeholder:text-white/70"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-2 border-2 bg-transparent border-white rounded-md w-full focus:outline-none placeholder:text-white/70"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer w-fit bg-[#F9345b] hover:scale-105 transition-all duration-300 ease-in-out text-white text-[18px] font-semibold py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>

          
        </div>
      </div>
    )
}

export default Form