import React from 'react'
import { AnimatedTestimonials } from "@/components/animated-testimonials";
import Form from '@/components/form';

const testimonials = [
  {
    quote:
      "The vehicle processing facility is state-of-the-art with excellent safety protocols. Their commitment to environmental standards is impressive.",
    name: "Seoul Processing Center",
    designation: "Main Vehicle Processing Facility",
    src: "/images/t1.webp",
  },
  {
    quote:
      "Advanced recycling equipment and efficient processing systems make this one of our most productive facilities.",
    name: "Busan Recycling Hub",
    designation: "Specialized Marine Vehicle Processing Center",
    src: "/images/t2.webp",
  },
  {
    quote:
      "Strategic location with excellent logistics support. Perfect for handling large volume vehicle processing. ",
    name: "Incheon Port Facility",
    designation: "Import/Export Processing Center",
    src: "/images/t3.webp",
  },
  {
    quote:
      "Modern equipment and skilled team handling complex vehicle dismantling with precision. ",
    name: "Daegu Technical Center",
    designation: "Advanced Dismantling Facility",
    src: "/images/t4.webp",
  },
  {
    quote:
      "Innovative recycling processes and high material recovery rates make this facility a benchmark in sustainability. ",
    name: "Gwangju Eco Center",
    designation: "Sustainable Processing Hub",
    src: "/images/t5.webp",
  },
];

const About = () => {

  return (
    <div className=''>
      <section className=" bg-[#49aef7]/80 pb-12 "  
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/herobg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                  <div className="px-4 flex-auto">
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h1 className="text-4xl md:text-6xl mb-2 text-white font-semibold leading-normal">
                Black Mining Junkyard LLP
                </h1>
                <p className="md:text-xl text-white/80 leading-relaxed mt-0 mb-4 text-blueGray-600">
                At <span className='underline '>Black Mining</span>, we offer eco-friendly vehicle scrapping solutions focused on sustainability and value recovery. Our certified team ensures safe, legal, and efficient disposal of end-of-life vehicles, fully complying with environmental standards.
                </p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-[#F9345b]">
                  <img alt="..." src="/images/assembly-yellow.avif" className="w-full align-middle rounded-t-lg" />
                  <blockquote className="relative p-8 mb-4 ">
                  <svg 
                    preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-[95px] -top-[94px]">
                            <polygon points="-30,95 583,95 583,65" className="text-[#F9345b] fill-current"></polygon>
                          </svg>
                
                    <h4 className="text-xl font-bold text-white">
                        Driven by Excellence
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    We are dedicated to delivering exceptional quality in everything we do. Our commitment to efficiency, sustainability, and customer satisfaction drives us to set new standards of excellence.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

      <div className='space-y-12 max-w-[1200px] mx-auto p-6 -mb-[100px]'>
        <p className='md:text-xl font-medium'>We are pioneers in sustainable vehicle disposal, dedicated to revolutionizing the way end-of-life vehicles are managed. Our mission is to transform outdated and unused vehicles into valuable resources, ensuring that every component is either recycled, repurposed, or disposed of responsibly. <br /> <br /> By embracing eco-friendly practices and cutting-edge technology, we aim to minimize waste and reduce the environmental impact of vehicle disposal. Our commitment extends beyond recycling – we strive to set new standards in sustainability and innovation, working towards a cleaner, greener future. With us, every vehicle’s end is a new beginning for our planet.</p>

        <div className=' text-white w-full max-md:flex-col flex justify-center gap-8'>
          <div className='md:w-[25%] p-4 rounded-xl bg-[#4AE454] flex flex-col items-center justify-center'>
            <h1 className='font-bold text-4xl text-[#4C65F0]'>10K+</h1>
            <h1 className='text-2xl font-semibold text-[#4C65F0]/80'>Vehicles Processed</h1>
            <p className='text-center text-lg'>Successfully processed and recycled vehicles since our founding.</p>
          </div>
          <div className='md:w-[25%] p-4 rounded-xl bg-[#4AE454] flex flex-col items-center justify-center'>
            <h1 className='font-bold text-4xl text-[#4C65F0]'>95%</h1>
            <h1 className='text-2xl font-semibold text-[#4C65F0]/80'>Recovery Rate</h1>
            <p className='text-center text-lg'>Of vehicle materials successfully recycled and repurposed.</p>
          </div>
          <div className='md:w-[25%] p-4 rounded-xl bg-[#4AE454] flex flex-col items-center justify-center'>
            <h1 className='font-bold text-4xl text-[#4C65F0]'>98%</h1>
            <h1 className='text-2xl font-semibold text-[#4C65F0]/80'>Client Satisfaction</h1>
            <p className='text-center text-lg'>Positive feedback from our vehicle disposal services.</p>
          </div>
          <div className='md:w-[25%] p-4 rounded-xl bg-[#4AE454] flex flex-col items-center justify-center'>
            <h1 className='font-bold text-4xl text-[#4C65F0]'>20+</h1>
            <h1 className='text-2xl font-semibold text-[#4C65F0]/80'>Years Experience</h1>
            <p className='text-center text-lg'>Providing professional vehicle disposal solutions.</p>
          </div>
        </div>
      </div>

      <div
        className="hero h-fit min-h-[500px] py-8 flex flex-col justify-center gap-8" 
        style={{
          backgroundImage: "linear-gradient(rgba(76, 101, 240, 0.9), rgba(76, 101, 240, 0.9))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

        <h1 className='text-4xl md:text-5xl font-bold text-white text-center pb-2 px-4 max-md:mt-16'>Authorized & Certified Vehicle Scrapping Center</h1>

        <div className='max-md:grid grid-cols-2 gap-6 flex justify-center items-start md:gap-24 w-full'>
          <div className='flex flex-col items-center justify-center gap-2'>
              <div className='h-[100px] w-[100px] p-4 border-2 rounded-full border-white overflow-hidden'>
                <img className='h-full w-full  object-cover  ' src="/images/iso.png" alt="" />
              </div>
              <p className='font-semibold text-[16px] text-center text-white'>ISO 9001:2015 <br /> Certified</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
              <div className='h-[100px] w-[100px] p-4 border-2 rounded-full border-white overflow-hidden'>
                <img className='h-full w-full object-cover  ' src="/images/morth.png" alt="" />
              </div>
              <p className='font-semibold text-[16px] text-center text-white'>MORTH <br /> Approved</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
              <div className='h-[100px] w-[100px] p-4 border-2 rounded-full border-white overflow-hidden'>
                <img className='h-full w-full object-cover  ' src="/images/cpcb.png" alt="" />
              </div>
              <p className='font-semibold text-[16px] text-center text-white'>CPCB <br /> Compliant</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
              <div className='h-[100px] w-[100px] p-4 border-2 rounded-full border-white overflow-hidden'>
                <img className='h-full w-full object-cover  ' src="/images/pcba.png" alt="" />
              </div>
              <p className='font-semibold text-[16px] text-center text-white max-w-[150px]'>Pollution Control <br /> Board Authorized</p>
          </div>
        </div>

      </div>

      <div className='space-y-12 max-w-[1200px] mx-auto p-6 mt-8'>
        <p className='md:text-xl font-medium'>Our state-of-the-art facilities and expert team collaborate to deliver comprehensive vehicle disposal solutions that prioritize both client satisfaction and environmental well-being. We are dedicated to ensuring that every vehicle we handle is processed responsibly, with a strong focus on recycling and repurposing materials to reduce waste. <br /><br /> Transparency, sustainability, and excellence form the core of our values, guiding every aspect of our operations. By combining advanced technology with our deep commitment to the planet, we provide efficient and eco-friendly services that make a meaningful difference for our clients and contribute to a sustainable future.</p>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      <Form />
      
    </div>
  )
}

export default About