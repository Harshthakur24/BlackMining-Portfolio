"use client"
import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import Link from "next/link";
import { useState, useEffect } from "react";


const Banner = () => {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className="relative min-h-screen bg-[#fafafa] mt-20 md:mt-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto pt-6 md:pt-24">
                    <BackgroundLines className="h-full banner-image">
                        {/* Hero Text Section */}
                        <div className="text-center mb-4 md:mb-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-navyblue mb-3 md:mb-6 leading-tight">
                                Turn Your Car Into Value <br className="hidden md:block" /> with Black Mining.
                            </h1>
                            <p className="text-base sm:text-lg text-bluegray max-w-2xl mx-auto px-4">
                                Your Trusted Partner in Safe and Legal Vehicle Disposal.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row text-center relative items-center gap-3 sm:gap-4 px-4 justify-center mt-5 mb-9">
                            <a
                                href="#contact"
                                className='w-auto text-15px rounded-full text-white font-medium bg-blue py-5 px-12 mt-2 inline-block sm:hover:scale-105 transition duration-300'
                            >
                                Contact Us
                            </a>
                            <Link href="/about">
                                <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-14 border border-lightgrey leafbutton'>
                                    More info
                                </button>
                            </Link>
                        </div>

                        {/* Contact Form - Mobile Optimized */}
                        <div id="contact" className="max-w-6xl mx-auto mb-8 md:mb-16 scroll-mt-8 px-4">
                            <form className="relative bg-white/60 backdrop-blur-md border border-gray-100 rounded-3xl md:rounded-[30px] p-3 md:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.09)] transition-all duration-300">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
                                    <div className="relative group">
                                        <label className="absolute left-4 -top-2.5 px-2 text-xs text-gray-500">
                                            <span className="bg-white px-1">Owner Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="h-14 w-full px-5 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/20 bg-white/80 transition-all duration-300 placeholder:text-gray-300 placeholder:scale-95"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className="absolute left-4 -top-2.5 px-2 text-xs text-gray-500">
                                            <span className="bg-white px-1">Phone</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Your Number"
                                            className="h-14 w-full px-5 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/20 bg-white/80 transition-all duration-300 placeholder:text-gray-300 placeholder:scale-95"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className="absolute left-4 -top-2.5 px-2 text-xs text-gray-500">
                                            <span className="bg-white px-1">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="h-14 w-full px-5 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/20 bg-white/80 transition-all duration-300 placeholder:text-gray-300 placeholder:scale-95"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className="absolute left-4 -top-2.5 px-2 text-xs text-gray-500">
                                            <span className="bg-white px-1">Vehicle</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Vechile Name"
                                            className="h-14 w-full px-5 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/20 bg-white/80 transition-all duration-300 placeholder:text-gray-300 placeholder:scale-95"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className="absolute left-4 -top-2.5 px-2 text-xs text-gray-500">
                                            <span className="bg-white px-1">Message</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your message"
                                            className="h-14 w-full px-5 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/20 bg-white/80 transition-all duration-300 placeholder:text-gray-300 placeholder:scale-95"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="h-14 w-full lg:w-auto px-8 bg-blue text-white font-medium rounded-2xl hover:bg-blue/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] active:scale-[0.98] hover:scale-105"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Images Section - Desktop Only */}
                        {isDesktop && (
                            <div className="hidden md:block overflow-hidden relative w-full py-4">
                                <div className="flex animate-infinite-scroll gap-6 pr-6">
                                    {/* First set */}
                                    <div className="flex gap-6 shrink-0">
                                        <Image
                                            src={'/img6.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img-main.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img5.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img3.jpg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                    </div>

                                    {/* Second set */}
                                    <div className="flex gap-6 shrink-0">
                                        <Image
                                            src={'/img6.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img-main.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img5.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img3.jpg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                    </div>

                                    {/* Third set for extra smoothness */}
                                    <div className="flex gap-6 shrink-0">
                                        <Image
                                            src={'/img6.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img-main.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img5.jpeg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                        <Image
                                            src={'/img3.jpg'}
                                            alt="banner-image"
                                            width={170}
                                            height={100}
                                            className="rounded-3xl w-auto max-w-[360px] object-cover shrink-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {!isDesktop && (
                            <div className="md:hidden w-full py-4 mb-8">
                                <div className="relative overflow-hidden rounded-2xl">
                                    {/* Stacked Image Cards with Hover Effects */}
                                    <div className="flex flex-col gap-4 px-4">
                                        <div className="relative group">
                                            <div className="relative overflow-hidden rounded-2xl">
                                                <Image
                                                    src={'/img6.jpeg'}
                                                    alt="banner-image"
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-lg font-semibold">Professional Service</h3>
                                                    <p className="text-sm opacity-90">Expert vehicle disposal solutions</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="relative group flex-1">
                                                <div className="relative overflow-hidden rounded-2xl">
                                                    <Image
                                                        src={'/img-main.jpeg'}
                                                        alt="banner-image"
                                                        width={200}
                                                        height={150}
                                                        className="w-full h-32 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                        <h3 className="text-sm font-semibold">Eco-Friendly</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative group flex-1">
                                                <div className="relative overflow-hidden rounded-2xl">
                                                    <Image
                                                        src={'/img5.jpeg'}
                                                        alt="banner-image"
                                                        width={200}
                                                        height={150}
                                                        className="w-full h-32 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                        <h3 className="text-sm font-semibold">Fast Service</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Section */}
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                                                <div className="text-2xl font-bold text-blue">10k+</div>
                                                <div className="text-sm text-gray-600">Vehicles Processed</div>
                                            </div>
                                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                                                <div className="text-2xl font-bold text-blue">95%</div>
                                                <div className="text-sm text-gray-600">Recovery Rate</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        )}
                    </BackgroundLines>
                </div>
            </div>
        </main>
    );
};

export default Banner;
