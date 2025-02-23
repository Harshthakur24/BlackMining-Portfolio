'use client';
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByTagName('nav')[0].style.backgroundColor = 'rgb(89, 110, 247)';
      } else {
        document.getElementsByTagName('nav')[0].style.backgroundColor = 'transparent';
      }
    }
  }, [])

  return (
    <nav className='fixed w-full z-40 px-0 py-2 md:py-4 transition-all duration-700 ease-in-out'>
        <div className=' w-full h-[40px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
            <div className='logo w-16 md:w-20'>
              <img src="/images/logo.png" alt="" />
            </div>

            <p className='text-white max-md:text-[10px] text-[12px] max-w-[250px]'>An ISO 9001:2015, 14001:2015, 45001 : 2018, 27001:2013 CERTIFIED COMPANY</p>

            </div>

            <ul className='flex gap-8 text-decoration-none list-none max-lg:hidden text-white font-semibold text-lg'>
              <li className='hover:text-white hover:scale-110 transition-all duration-300 ease-in-out'><a href="/">Home</a></li>
              <li className='hover:text-white hover:scale-110 transition-all duration-300 ease-in-out'><a href="/about">About</a></li>
              <li className='hover:text-white hover:scale-110 transition-all duration-300 ease-in-out'><a href="/services">Services</a></li>
              {/* <li className='hover:text-white hover:scale-110 transition-all duration-300 ease-in-out'><a href="/gallery">Gallery</a></li> */}
              <li className='hover:text-white hover:scale-110 transition-all duration-300 ease-in-out'><a href="/faqs">FAQs</a></li>
            </ul>

            <a className='max-lg:hidden px-4 text-white font-semibold py-2 bg-[#F9345b] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg' href="/#contact">Contact Us</a>

            <div 
              className="lg:hidden w-6  mr-4"
              onClick={() => setOpen(!open)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> 
                <path fill="green" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
              </svg>
            </div>
        </div>

        <div 
          className={` bg-[#4AE454]/50 absolute md:right-6 top-[60px] w-[300px] backdrop-filter backdrop-blur-sm text-white font-bold rounded-lg px-8 py-4 text-[20px] list-none max-md:left-2 max-md:w-[97%] max-md: lg:hidden transition-all duration-300 ease-in-out  ${open ? 'opacity-100 ' : 'opacity-0'}`}
        >
            <li className='p-2 flex justify-center items-center '><a href="/">Home</a></li>
            <li className='p-2 flex justify-center items-center '><a href="/about">About</a></li>
            <li className='p-2 flex justify-center items-center '><a href="/services">Services</a></li>
            {/* <li className='p-2 flex justify-center items-center '><a href="#">Gallery</a></li> */}
            <li className='p-2 flex justify-center items-center '><a href="/faqs">FAQs</a></li>
        </div>
 
    </nav>
  )
}

export default Navbar