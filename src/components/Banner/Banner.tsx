"use client"
import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import Link from "next/link";
import { useState, useEffect, FormEvent } from "react";
import toast, { Toaster } from 'react-hot-toast';


const Banner = () => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [formData, setFormData] = useState({
        ownerName: '',
        phoneNumber: '',
        email: '',
        vehicle: '',
        message: ''
    });

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Show loading toast
        const loadingToast = toast.loading('Sending...', {
            style: {
                background: 'white',
                color: '#333',
                padding: '16px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            },
        });

        try {
            // Validate form data before sending
            if (!formData.ownerName || !formData.email || !formData.phoneNumber) {
                toast.error('Please fill in all required fields', { id: loadingToast });
                return;
            }

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    formSource: 'banner'
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to send message');
            }

            // Clear form on success
            setFormData({
                ownerName: '',
                phoneNumber: '',
                email: '',
                vehicle: '',
                message: ''
            });

            toast.success('Message sent successfully!', { id: loadingToast });
        } catch (error) {
            console.error('Form submission error:', error);

            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    toast.error('Request timed out. Please try again.', { id: loadingToast });
                } else {
                    toast.error(error.message || 'Failed to send message', { id: loadingToast });
                }
            } else {
                toast.error('An unexpected error occurred', { id: loadingToast });
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    // Default options for all toasts
                    duration: 5000,
                    style: {
                        background: 'white',
                        color: '#333',
                    },
                }}
            />






            <BackgroundLines className="h-full relative min-h-screen bg-[#fafafa] container max-w-7xl mx-auto px-4 md:px-6 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
                {/* Hero Text Section - Added pt classes for spacing */}
                <div className="text-center mb-6 md:mb-10 pt-8 md:pt-12">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-navyblue mb-2 md:mb-3 leading-tight">
                        Turn Your Car Into Value <br className="hidden md:block" /> with Black Mining.
                    </h1>
                    <p className="text-base sm:text-lg text-bluegray max-w-2xl mx-auto px-4">
                        Your Trusted Partner in Safe and Legal Vehicle Disposal.
                    </p>
                </div>

                {/* CTA Buttons - Fixed alignment */}
                <div className="flex flex-row items-center relative justify-center gap-4 px-4 mb-10 scale-75 md:scale-100">
                    <a
                        href="#contact"
                        className="text-base whitespace-nowrap rounded-full text-white font-medium bg-blue py-3 px-8 sm:py-4 sm:px-8 md:py-5 md:px-12 inline-flex items-center justify-center hover:scale-105 transition duration-300"
                    >
                        Contact Us
                    </a>
                    <Link href="/about">
                        <button
                            type="button"
                            className="text-base whitespace-nowrap rounded-full text-blue font-medium py-3 px-8 md:py-5 md:px-12 sm:py-4 sm:px-8 border border-lightgrey inline-flex items-center justify-center transition duration-300 hover:text-white hover:bg-blue leafbutton"
                        >
                            More info
                        </button>
                    </Link>
                </div>

                {/* Contact Form - Mobile Optimized */}
                <div id="contact" className="max-w-6xl mx-auto mb-8 md:mb-16 scroll-mt-8 px-4">
                    <form onSubmit={handleSubmit} className="relative bg-white/60 backdrop-blur-md border border-gray-100 rounded-3xl md:rounded-[30px] p-3 md:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.09)] transition-all duration-300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
                            <div className="relative group">
                                <label className="absolute left-4 -top-2.5 px-2 text-xs text-gray-500">
                                    <span className="bg-white px-1">Owner Name</span>
                                </label>
                                <input
                                    name="ownerName"
                                    value={formData.ownerName}
                                    onChange={handleChange}
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
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    name="vehicle"
                                    value={formData.vehicle}
                                    onChange={handleChange}
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Your message"
                                    className="h-14 w-full px-5 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/20 bg-white/80 transition-all duration-300 placeholder:text-gray-300 placeholder:scale-95"
                                />
                            </div>
                            <button
                                type="submit"
                                className="h-14 lg:w-auto px-8 bg-blue text-white font-medium rounded-2xl hover:bg-blue/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] active:scale-[0.98] hover:scale-105"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {!isDesktop && (
                        <div className="py-4 mb-2 mt-8">
                            <div className="rounded-2xl">
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

            </BackgroundLines>



        </>
    );
};

export default Banner;
