import React from 'react'

const Footer = () => {
  return (
    <div 
      style={{
        background: 'linear-gradient(to right, rgba(76, 101, 240, 0.9), rgba(74, 228, 84, 0.9))'
      }}
      className=" mt-2"
    >
    <div className="mx-auto w-full pt-2 md:pt-4 px-4 sm:px-6 lg:px-8 ">
      <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
        
        {/* Logo and Company Name */}
        <div className="col-span-4 md:col-span-12 lg:col-span-4">
          <div className="flex gap-2 items-center pb-8">
            <img
              alt="logo"
              loading="lazy"
              width="80"
              // height="80"
              decoding="async"
              data-nimg="1"
              className=""
              style={{ color: "transparent" }}
              src="/images/logo.png"
            />
            <h1 className="text-xl font-bold text-white">Black Mining Junkyard LLP</h1>
          </div>
          <div className="flex gap-4">
            <a className="p-3 px-[0.9rem] hover:scale-110 transition-all duration-200 ease-in flex items-center justify-center bg-[#4AE454]/30 rounded-full" href="https://facebook.com">
              <img
                alt="facebook"
                loading="lazy"
                width="15"
                height="20"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/images/facebook.svg"
              />
            </a>
            <a className=" p-3 flex hover:scale-110 transition-all duration-200 ease-in items-center justify-center bg-[#4AE454]/30 rounded-full" href="https://twitter.com">
              <img
                alt="twitter"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/images/twitter.svg"
              />
            </a>
            <a
              className=" p-3 flex hover:scale-110 transition-all duration-200 ease-in items-center justify-center bg-[#4AE454]/30 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/black.mining.junkyard.llp?utm_source=qr&igsh=aTVsYzNxM3cyamt6"
            >
              <img
                alt="instagram"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/images/instagram.svg"
              />
            </a>
          </div>
        </div>
  
        {/* Links Section 1 */}
        <div className="group relative col-span-2 md:col-span-4 lg:col-span-2">
          <ul>
            <li className="mb-4">
              <a className="hover:border-b border-white pb-1 font-semibold text-white space-links" href="/">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a className="hover:border-b border-white pb-1 font-semibold text-white space-links" href="/services">
                Services
              </a>
            </li>
            <li className="mb-4">
              <a className="hover:border-b border-white pb-1 font-semibold text-white space-links" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
  
        {/* Links Section 2 */}
        <div className="group relative col-span-2 md:col-span-4 lg:col-span-2">
          <ul>
            <li className="mb-4">
              <a className="hover:border-b border-white pb-2 font-semibold text-white space-links" href="/services">
                Vehicle Disposal
              </a>
            </li>
            <li className="mb-4">
              <a className="hover:border-b border-white pb-2 font-semibold text-white space-links" href="/services">
                Recycling Process
              </a>
            </li>
            <li className="mb-4">
              <a className="hover:border-b border-white pb-2 font-semibold text-white space-links" href="/about">
                Legal Info
              </a>
            </li>
            <li className="mb-4">
              <a className="hover:border-b border-white pb-2 font-semibold text-white space-links" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
  
        {/* Address, Phone, and Email */}
        <div className="col-span-4 md:col-span-4 lg:col-span-4 text-white">
          <div className="flex gap-2">
            <img
              alt="mask-icon"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/images/location.svg"
            />
            <h5 className="text-base font-semibold text-offwhite">
              Khasra no. 103 Barhana Jhajjar
            </h5>
          </div>
          <div className="flex gap-2 mt-10">
            <img
              alt="telephone-icon"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/images/phone.svg"
            />
            <h5 className="text-base font-semibold text-offwhite">+91 89 89 89 89 93</h5>
          </div>
          <div className="flex gap-2 mt-10">
            <img
              alt="email-icon"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/images/email.svg"
            />
            <h5 className="text-base font-semibold text-offwhite">
              blackminingjunk@gmail.com
            </h5>
          </div>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="py-10 lg:flex items-center justify-between border-t border-t-bordertop border-white text-white/70 ">
        <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
          @2025 Black Mining Junkyard LLP. All Rights Reserved
        </h4>
        <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
          <h4 className="text-offwhite text-sm font-normal">
            <a target="_blank" href="/">
              Privacy Policy
            </a>
          </h4>
          <div className="h-5 bg-bordertop w-0.5"></div>
          <h4 className="text-offwhite text-sm font-normal">
            <a target="_blank" href="/">
              Terms & Conditions
            </a>
          </h4>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Footer