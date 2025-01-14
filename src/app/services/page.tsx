"use client"
import { HeroParallax } from "@/src/components/ui/hero-parallax"
import { products } from "./data"
import { Aboutdata } from "./data"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
    return (
        <main className="mb-48 mt-6 banner-image">
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-navyblue sm:text-6xl lg:text-8xl md:4px lh-96">
                    Services we provide <br />
                </h1>
                <p className="mt-4 text-sm sm:text-md lg:text-lg leading-8 text-bluegray">
                    We provide a variety of services to our clients.
                </p>
            </div>
            <div>
                {/*  SERVICE-1 */}
                <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                        {/* COLUMN-1 */}
                        <div className='col-span-6 flex justify-center'>
                            <div className="flex flex-col align-middle justify-center p-10">
                                <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">1. First Service that we provide to customers</p>
                                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                                    Black Mining provides comprehensive end-of-life vehicle solutions with a focus on environmental sustainability and maximum value recovery. Our certified team ensures safe, legal, and efficient vehicle disposal while meeting all environmental regulations.
                                </h4>
                                <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                            </div>
                        </div>

                        <div className='lg:col-span-1'></div>

                        {/* COLUMN-2 */}
                        <div className='col-span-6 lg:col-span-5'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-circlebg rounded-3xl'>
                                {Aboutdata.map((item, i) => (
                                    <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                        <h4 className="text-2xl font-semibold">{item.country}</h4>
                                        <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                {/*  SERVICE-2 */}
                <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8 banner-image'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                        {/* COLUMN-2 */}
                        <div className='col-span-6 lg:col-span-5'>
                            <div className='gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                                <Image src={'/img5.jpeg'} alt={'marketing'} width={1500} height={1500} className="mb-5" />
                            </div>
                        </div>
                        <div className='lg:col-span-1'></div>
                        {/* COLUMN-1 */}
                        <div className='col-span-6 flex justify-center'>
                            <div className="flex flex-col align-middle justify-center p-10">
                                <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">2. Second Service that we provide to customers</p>
                                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                                    Black Mining provides comprehensive end-of-life vehicle solutions with a focus on environmental sustainability and maximum value recovery. Our certified team ensures safe, legal, and efficient vehicle disposal while meeting all environmental regulations.
                                </h4>
                                <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  SERVICE-3 */}
                <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                        {/* COLUMN-1 */}
                        <div className='col-span-6 flex justify-center'>
                            <div className="flex flex-col align-middle justify-center p-10">
                                <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">3. Third Service that we provide to customers</p>
                                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                                    Black Mining provides comprehensive end-of-life vehicle solutions with a focus on environmental sustainability and maximum value recovery. Our certified team ensures safe, legal, and efficient vehicle disposal while meeting all environmental regulations.
                                </h4>
                                <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                            </div>
                        </div>

                        <div className='lg:col-span-1'></div>

                        {/* COLUMN-2 */}
                        <div className='col-span-6 lg:col-span-5'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-[#fae7ac] rounded-3xl'>
                                {Aboutdata.map((item, i) => (
                                    <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                        <h4 className="text-2xl font-semibold">{item.country}</h4>
                                        <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                {/*  SERVICE-4 */}
                <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8 banner-image'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                        {/* COLUMN-2 */}
                        <div className="col-span-6 lg:col-span-5">
                            <div className="gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-lightgrey rounded-3xl scale-x-[-1]">
                                <Image src={'/img5.jpeg'} alt={'marketing'} width={1500} height={1500} className="mb-5" />
                            </div>
                        </div>
                        <div className='lg:col-span-1'></div>
                        {/* COLUMN-1 */}
                        <div className='col-span-6 flex justify-center'>
                            <div className="flex flex-col align-middle justify-center p-10">
                                <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">4. Fourth Service that we provide to customers</p>
                                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                                    Black Mining provides comprehensive end-of-life vehicle solutions with a focus on environmental sustainability and maximum value recovery. Our certified team ensures safe, legal, and efficient vehicle disposal while meeting all environmental regulations.
                                </h4>
                                <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}