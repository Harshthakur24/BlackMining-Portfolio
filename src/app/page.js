'use client'
import React, { useEffect, useState } from 'react'
import Form from '../components/form';
import Popup from '@/components/popup';
import Image from 'next/image';

const Home = () => {
  const testRef1 = React.createRef();
  const testRef2 = React.createRef();
  const testRef3 = React.createRef();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 1500);
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "none";
        } else {
          entry.target.style.transform = "translateY(100px)";
        }
      });
    });
  
    observer.observe(testRef1.current);
    observer.observe(testRef2.current);
    observer.observe(testRef3.current);
  }, [testRef1, testRef2, testRef3]);

  return (
    <main className='transition-all duration-300 ease-in-out'>
      { showPopup && <Popup setShowPopup={setShowPopup}/>}

      <a className='fixed right-4 bottom-4 z-50 hover:scale-110 duration-300 ease-in-out transition-all' href="https://wa.me/918989898993" target="_blank" rel="noopener noreferrer">
        <Image src="/images/whatsapp.png" width={50} height={50} alt="whatsapp" />
      </a>

      <div
        className="hero h-fit md:min-h-screen flex flex-col justify-center" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/images/herobg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="hero-overlay bg-opacity-60 bg-black-800 h-screen z-10 absolute"></div>
        <div className="hero-content text-center md:mt-8">
          <div className=" flex flex-col items-center mx-auto px-4 py-16 gap-12">
            <div>
              <div className='flex items-center justify-center mb-2'>
                <img src="/images/govt.png" className='bg-transparent w-[50px] md:w-[100px]' alt="" />
              </div>

              <h1 
                className='font-bold border-b border-t border-white py-2 max-md:text-[12px] text-[30px]' 
                style={{ 
                  background: 'linear-gradient(to right,rgb(105, 240, 105),rgb(119, 144, 255))', 
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent',
                  }}
                >
                Certified by MSTC Ltd (Govt of India Enterprise)
              </h1>

              <h1 className='text-white font-semibold text-[24px] mt-2 border-b-[1px] border-white w-fit mx-auto'>Contact Now - +91 89 89 89 89 93</h1>

            </div>

            <h1 className="mb-5 text-white content flex flex-col gap-8 items-center">
              <p className='text-3xl md:text-6xl font-bold '> R and Get the Best Value for Your</p>
              <ol className='text-bold text-[30px] md:text-[60px] '>
                <li><span>Cars</span></li>
                <li><span>Two Wheelers</span></li>
                <li><span>Three Wheelers</span></li>
                <li><span>Vans</span></li>
                <li><span>Industrial Machinery</span></li>
              </ol>  
            </h1>

            <div className='flex flex-col gap-4 items-center justify-center'>
              <p className=' text-[18px] md:text-4xl font-semibold text-white'>
                Hassle-Free Vehicle Scrapping – Free Pickup & Instant Valuation! Book Now.
              </p>
              <hr className='w-full md:w-1/2 border-white' />
              <a 
                className='cursor-pointer w-fit bg-[#F9345b] hover:bg-[#F9345b]/80 text-white text-[16px] md:text-[20px] font-bold py-4 px-8 rounded-lg '
                href='/#contact'
              >
                Contact Now
              </a>
            </div>

            
          </div>
        </div>
      </div>

      <div
        className="hero h-fit  mt-2 flex flex-col overflow-hidden"
      >
        <div className="hero-content text-center">
          <div className=" flex flex-col items-center mx-auto px-4 py-20 gap-12 md:gap-20">

            <h1 className='font-bold text-4xl md:text-6xl text-[#009900]/90'>Why Recycle Your Vehicles</h1>

            <div className='flex max-md:flex-col justify-center gap-12 md:gap-24 w-full'>
              <div className='flex flex-col items-center justify-center gap-2'>
                 <div className='h-[200px] w-[200px] border-4 rounded-full border-[#009900]/70 overflow-hidden'>
                    <img className='h-full w-full object-cover  ' src="/images/junkyard.avif" alt="" />
                 </div>
                 <p className='font-semibold text-2xl text-[#009900]'>Minimize Environmental Impact</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                 <div className='h-[200px] w-[200px] border-4 rounded-full border-[#009900]/70 overflow-hidden'>
                    <img className='h-full w-full object-cover  ' src="/images/bulb.jpg" alt="" />
                 </div>
                 <p className='font-semibold text-2xl text-[#009900]'>Conserve Energy Resources</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                 <div className='h-[200px] w-[200px] border-4 rounded-full border-[#009900]/70 overflow-hidden'>
                    <img className='h-full w-full object-cover  ' src="/images/metal.jpeg" alt="" />
                 </div>
                 <p className='font-semibold text-2xl text-[#009900]'>Preserve Natural Resources</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                 <div className='h-[200px] w-[200px] border-4 rounded-full border-[#009900]/70 overflow-hidden'>
                    <img className='h-full w-full object-cover  ' src="/images/legal-2.jpg" alt="" />
                 </div>
                 <p className='font-semibold  text-2xl text-[#009900]'>Ensure Regulatory Compliance</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div
        className="hero h-fit md:min-h-[calc(100vh-200px)] mt-2 flex flex-col justify-center"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/choosebg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="hero-overlay bg-opacity-60 bg-black-800 h-screen z-10 absolute"></div>
        <div className="hero-content text-center">
          <div className=" flex flex-col items-center mx-auto px-4 py-16 gap-24">

            <h1 className='text-white font-bold text-4xl md:text-6xl'>Why Choose Us</h1>

            <div className='text-[18px] font-normal text-white flex flex-col gap-12'>
              <div className='flex justify-between gap-12 max-md:flex-col'>
                <div className='flex gap-6 items-center max-md:flex-col justify-center'>
                  <div className='h-[130px] w-[130px] border-4 border-white rounded-full overflow-hidden bg-black '>
                    <img 
                      src="/images/junkyard2.webp" 
                      alt=""
                      className='w-full h-full object-cover' 
                    />
                  </div>
                  <div className='md:max-w-[450px] flex flex-col items-center md:items-start gap-2 '>
                    <h1 className='font-semibold text-3xl'>Authorized Center</h1>
                    <h1 className='text-center md:text-left text-[22px] md:text-[20px]'>Certified and trustworthy services for hassle-free vehicle scrapping.</h1>
                  </div>
                </div>
                <div className='flex gap-6 items-center max-md:flex-col justify-center'>
                  <div className='h-[130px] w-[130px] border-4 border-white rounded-full overflow-hidden'>
                    <img 
                        src="/images/pickup2.webp" 
                        alt=""
                        className='w-full h-full object-cover' 
                      />
                  </div>
                  <div className='md:max-w-[450px] flex flex-col items-center md:items-start gap-2 '>
                    <h1 className='font-semibold text-3xl'>Free Pickup</h1>
                    <h1 className='text-center md:text-left text-[22px] md:text-[20px]'>Convenient doorstep vehicle pickup at no additional cost.</h1>
                  </div>
                </div>
              </div>
              <div className='flex justify-between gap-12 max-md:flex-col'>
                <div className='flex gap-6 items-center max-md:flex-col justify-center'>
                  <div className='h-[130px] w-[130px] border-4 border-white rounded-full overflow-hidden'>
                  <img 
                      src="/images/money.jpeg" 
                      alt=""
                      className='w-full h-full object-cover' 
                    />
                  </div>
                  <div className='md:max-w-[450px] flex flex-col items-center md:items-start gap-2 '>
                    <h1 className='font-semibold text-3xl'>Fair Value</h1>
                    <h1 className='text-center md:text-left text-[22px] md:text-[20px]'>Get the best price for your old or damaged vehicle.</h1>
                  </div>
                </div>
                <div className='flex gap-6 items-center max-md:flex-col justify-center'>
                  <div className='h-[130px] w-[130px] border-4 border-white rounded-full overflow-hidden'>
                  <img 
                      src="/images/digital.webp" 
                      alt=""
                      className='w-full h-full object-cover' 
                    />

                  </div>
                  <div className='md:max-w-[450px] flex flex-col items-center md:items-start gap-2 '>
                    <h1 className='font-semibold text-3xl'>Digital Process</h1>
                    <h1 className='text-center md:text-left text-[22px] md:text-[20px]'>Quick and transparent transactions through a fully online process.</h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div
        className="hero h-fit md:min-h-[calc(100vh-200px)] mt-2 flex flex-col justify-center"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(76, 101, 240, 0.9), rgba(74, 228, 84, 0.9)), url('')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="hero-overlay bg-opacity-60 bg-black-800 h-screen z-10 absolute"></div>
        <div className="hero-content text-center">
          <div className=" flex flex-col items-center mx-auto px-4 py-16 gap-24">

            <h1 className='text-white font-bold text-6xl'>How it Works</h1>

            <div className='max-md:flex-col md:flex justify-center items-center space-y-[20px] md:gap-12 '>
              <div className='border-2 border-white rounded-lg p-2 h-[300px] w-[300px] shadow-lg hover:translate-y-2 transition-all duration-300 ease-in-out'>
                <div className='border-2 border-white rounded-lg p-4 h-[300px] w-[300px] flex flex-col items-center justify-center gap-4'>
                    <img src="/images/car.png" className='w-[60px] mx-auto' alt="" />

                    <h1 className='text-center text-white text-2xl font-semibold'>Share Details of your Vehicle</h1>
                    <p className='text-center text-white max-md:text-[18px]'>Tell us the year, model and condition of your vehicle to help us find the right value.</p>
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6 max-md:rotate-90 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>


              <div className='border-2 border-white rounded-lg p-2 h-[300px] w-[300px] shadow-lg hover:translate-y-2 transition-all duration-300 ease-in-out'>
                <div className='border-2 border-white rounded-lg p-4 h-[300px] w-[300px] flex flex-col items-center justify-center gap-4'>
                    <img src="/images/money.png" className='w-[60px] mx-auto' alt="" />

                    <h1 className='text-center text-white text-2xl font-semibold'>Get an Instant Quote</h1>
                    <p className='text-center text-white max-md:text-[18px]'>We will provide you with an instant offer based on your vehicle details.</p>
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6 max-md:rotate-90 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>

              <div className='border-2 border-white rounded-lg p-2 h-[300px] w-[300px] shadow-lg hover:translate-y-2 transition-all duration-300 ease-in-out'>
                <div className='border-2 border-white rounded-lg p-4 h-[300px] w-[300px] flex flex-col items-center justify-center gap-4'>
                    <img src="/images/tow.png" className='w-[60px] mx-auto' alt="" />

                    <h1 className='text-center text-white text-2xl font-semibold'>Free Vehicle Pickup</h1>
                    <p className='text-center text-white max-md:text-[18px]'>We will pick up your vehicle from your doorstep for FREE!.</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div
        className="hero h-fit md:min-h-[calc(100vh-200px)] mt-2 flex flex-col justify-center overflow-hidden"
      >
        <div className="hero-overlay bg-opacity-60 bg-black-800 h-screen z-10 absolute"></div>
        <div className="hero-content text-center">
          <div className=" flex flex-col items-center mx-auto px-4 py-16 gap-24">

            <h1 className='text-black max-w-[900px] font-bold text-4xl md:text-6xl'>Trusted by Thousands of Vehicle Owners for Safe and Reliable Disposal Services</h1>

          <div className='max-md:flex-col flex justify-center gap-16 md:gap-8 text-[18px] px-2'>
                <div ref={testRef1} className='min-h-[250px] relative max-w-[400px] bg-blue-500 text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500' style={{opacity: 1, transform: 'translateY(100px)'}}>
                  <div className='overflow-hidden h-[80px] w-[80px] bg-white rounded-full absolute top-[calc(-40px)] left-[calc(50%-40px)]'>
                    <img src="/images/ankush.webp" alt="" />  
                  </div>  

                  <h1 className='md:text-[20px] font-bold mt-2'>Ankush Chaudhary</h1>
                  <p className='text-white/70 text-[14px] -mt-1'>Business Owner</p>

                  <p className='mt-4'>The service was exceptional! They handled my vehicle disposal with utmost professionalism and care. The entire process was smooth and transparent.</p>
                </div>


                <div ref={testRef2} className='min-h-[250px] relative max-w-[400px] bg-blue-500 text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500' style={{opacity: 1, transform: 'translateY(100px)'}}>
                  <div className='overflow-hidden h-[80px] w-[80px] bg-white rounded-full absolute top-[calc(-40px)] left-[calc(50%-40px)]'>
                    <img src="/images/shreya.webp" alt="" />  
                  </div>  

                  <h1 className='md:text-[20px] font-bold mt-2'>Shreya Singh</h1>
                  <p className='text-white/70 text-[14px] -mt-1'>Fleet Manager</p>
                  
                  <p className='mt-4'>I was impressed by their commitment to environmental sustainability. They ensured every recyclable part was properly processed.</p>
                </div>  
                <div ref={testRef3} className='min-h-[250px] relative max-w-[400px] bg-blue-500 text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500' style={{opacity: 1, transform: 'translateY(100px)'}}>
                  <div className='overflow-hidden h-[80px] w-[80px] bg-white rounded-full absolute top-[calc(-40px)] left-[calc(50%-40px)]'>
                    <img src="/images/shivani.webp" alt="" />  
                  </div>  

                  <h1 className='md:text-[20px] font-bold mt-2'>Shivani Kapoor</h1>
                  <p className='text-white/70 text-[14px] -mt-1'>Car Dealer</p>

                  <p className='mt-4'>Quick, efficient, and professional. Their team made what could have been a complex process incredibly simple and straightforward.</p>
                </div>  

                             
                             
          </div>
            
          </div>
        </div>
      </div>

      <Form />
      
    </main>
  )
}

export default Home
