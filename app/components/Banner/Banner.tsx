import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";



const Banner = () => {
    return (

        <main className="mb-48 mt-28">


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


                        <div className="text-center mt-5">
                            <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                                Contact Us
                            </button>
                            <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                                More info
                            </button>

                        </div>

                        <div className="flex justify-center mt-12">
                            <Image src={'/img-main.jpeg'} alt="banner-image" width={360} height={200} />
                        </div>
                    </BackgroundLines>
                </div>

            </div>

        </main>

    )
}

export default Banner;
