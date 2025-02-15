import React from 'react'

const Services = () => {
  return (
    <div>

        <section className=" bg-[#49aef7]/80 pb-12 "
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.pexels.com/photos/1089425/pexels-photo-1089425.jpeg?cs=srgb&dl=pexels-msv63-1089425.jpg&fm=jpg')",
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
                Professional Vehicle Disposal Services
                </h1>
                <p className="md:text-xl text-white/80 leading-relaxed mt-0 mb-4 text-blueGray-600">
                Black Mining provides comprehensive end-of-life vehicle solutions with a focus on environmental sustainability and maximum value recovery. Our certified team ensures safe, legal, and efficient vehicle disposal while meeting all environmental regulations.
                </p>
                <p className="font-bold text-white pb-2 border-b border-white">Black Mining Junkyard</p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto max-md:mt-2">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-[#F9345b]">
                  <img alt="..." src="/images/assembly-blue.avif" className="w-full align-middle rounded-t-lg" />
                  <blockquote className="relative p-8 mb-4 ">
                  <svg 
                    preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-[95px] -top-[94px]">
                            <polygon points="-30,95 583,95 583,65" className="text-[#F9345b] fill-current"></polygon>
                          </svg>
                
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    Our Professional Vehicle Disposal Services provide a safe, eco-friendly solution for responsibly disposing of end-of-life vehicles, meeting all compliance standards.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 py-6 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-xl shadow-xl lg:flex-row">
              <img src="/images/inspection.jpg" alt="" className="h-60 md:h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <h1 className="text-4xl font-bold">Expert Vehicle Assessment</h1>
                <p className="my-6 text-xl">Our expert vehicle assessment ensures you receive the highest value for your old vehicle, offering reliable and accurate evaluations.</p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl shadow-xl lg:flex-row-reverse">
              <img src="/images/legal.webp" alt="" className="h-60 md:h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h1 className="text-4xl font-bold">Legal Documentation</h1>
                <p className="my-6 text-xl">We handle all disposal paperwork and legal requirements, ensuring a seamless and hassle-free process for your vehicle's disposal.</p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl shadow-xl lg:flex-row">
              <img src="/images/pickup.png" alt="" className="h-60 md:h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h1 className="text-4xl font-bold">Free Vehicle Pickup</h1>
                <p className="my-6 text-xl">We offer free vehicle pickup services, ensuring a convenient and hassle-free way to dispose of your vehicle.</p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl shadow-xl lg:flex-row-reverse">
              <img src="/images/support.jpg" alt="" className="h-60 md:h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h1 className="text-4xl font-bold">De-registration Support</h1>
                <p className="my-6 text-xl">Our de-registration support service ensures a seamless process for removing your vehicle from official records, handling all necessary formalities.</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Services