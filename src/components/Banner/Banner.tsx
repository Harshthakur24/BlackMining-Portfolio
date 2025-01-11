"use client"
import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import Link from "next/link";


const Banner = () => {
    return (

        <main className="mb-48 mt-16">


            <div className="px-6 lg:px-8">


                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <BackgroundLines className="h-full">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                                Turn Your Car Into Value <br /> with Black Mining.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-bluegray">
                                Your Trusted Partner in Safe and Legal Vehicle Disposal.
                            </p>
                        </div>


                        <div className="flex text-center relative justify-center mt-5">
                            <a
                                href="#contact"
                                className='text-15px rounded-full text-white font-medium bg-blue py-5 px-9 mt-2 inline-block'
                            >
                                Contact Us
                            </a>
                            <Link href="/about">
                                <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                                    More info
                                </button>
                            </Link>
                        </div>

                        <div className="max-w-6xl mx-auto h-16 mt-8 px-5 border border-blue py-3 rounded-full items-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300">
                            <form className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                <input
                                    type="text"
                                    placeholder="Owner Name"
                                    className="px-4 py-2 border border-lightgrey rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent leafbutton"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="px-4 py-2 border border-lightgrey rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent leafbutton"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="px-4 py-2 border border-lightgrey rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent leafbutton"
                                />
                                <input
                                    type="text"
                                    placeholder="Vehicle Name"
                                    className="px-4 py-2 border border-lightgrey rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent leafbutton"
                                />
                                <input
                                    type="text"
                                    placeholder="Message"
                                    className="px-4 py-2 border border-lightgrey rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent leafbutton"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue text-white font-medium rounded-3xl hover:bg-blue/90 transition duration-150 ease-in-out"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        <div className="flex justify-center mt-12 gap-6">
                            <Image src={'/img5.jpeg'} alt="banner-image" width={360} height={200} className="rounded-3xl" />
                            <Image src={'/img-main.jpeg'} alt="banner-image" width={360} height={200} className="rounded-3xl" />
                            <Image src={'/img6.jpeg'} alt="banner-image" width={360} height={200} className="rounded-3xl" />
                        </div>
                    </BackgroundLines>
                </div>

            </div>

        </main>

    )
}

export default Banner;
